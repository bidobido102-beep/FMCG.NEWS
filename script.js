fetch("prices.json")
  .then(res => res.json())
  .then(data => {

    const usdRate = data.usdRate;

    let globalHTML = "";
    let localHTML = "";

    let up = 0;
    let down = 0;

    data.categories.forEach(cat => {
      cat.items.forEach(item => {

        let icon = "➖";
        let cls = "stable";

        if (item.trend === "up") { icon = "🔼"; cls = "up"; up++; }
        if (item.trend === "down") { icon = "🔽"; cls = "down"; down++; }

        // تحويل الدولار لجنيه
        let priceText = "";
        if (item.priceUsd) {
          const egp = Math.round(item.priceUsd * usdRate);
          priceText = `${egp} جنيه`;
        } else {
          priceText = `${item.price} جنيه`;
        }

        const card = `
          <div class="card">
            <h3>${icon} ${item.name}</h3>
            <div class="price ${cls}">${priceText}</div>
          </div>
        `;

        if (cat.name.includes("عالمية")) {
          globalHTML += card;
        } else {
          localHTML += card;
        }
      });
    });

    document.getElementById("globalPrices").innerHTML = globalHTML;
    document.getElementById("localPrices").innerHTML = localHTML;

    // رسم بياني تاريخي
    new Chart(document.getElementById("priceChart"), {
      type: "line",
      data: {
        labels: data.history.dates,
        datasets: [
          {
            label: "الذهب (أوقية)",
            data: data.history.gold,
            borderColor: "#c99700",
            tension: 0.3
          },
          {
            label: "النفط (برميل)",
            data: data.history.oil,
            borderColor: "#0969da",
            tension: 0.3
          }
        ]
      }
    });

    // خبر تلقائي
    let newsText =
      up > down
        ? "شهدت الأسواق اليوم ارتفاعًا في أسعار الذهب والنفط، ما انعكس على توجهات السوق."
        : down > up
        ? "سجلت بعض السلع تراجعًا طفيفًا اليوم وسط تحسن في المعروض."
        : "استقرت أسعار السلع دون تغيّرات ملحوظة اليوم.";

    document.getElementById("news").innerText = "📰 " + newsText;

    // تنبيه
    if (up > 0) {
      document.getElementById("alertBox").style.display = "block";
      document.getElementById("alertBox").innerText =
        "⚠️ تنبيه: ارتفاع في أسعار بعض السلع العالمية اليوم.";
    }

    window.stats = { up, down };
  });

function checkTrend() {
  let result =
    window.stats.up > window.stats.down
      ? "📈 الاتجاه العام: ارتفاع"
      : window.stats.down > window.stats.up
      ? "📉 الاتجاه العام: انخفاض"
      : "➖ الاتجاه العام: استقرار";

  document.getElementById("trendResult").innerText = result;
}
