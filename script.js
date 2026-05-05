fetch("prices.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate +
      " | سعر الدولار: " + Math.round(data.usdRate) + " جنيه";

    let globalHTML = "";
    let localHTML = "";
    let up = 0, down = 0;

    data.categories.forEach(cat => {
      cat.items.forEach(item => {

        let icon = "➖", cls = "stable";
        if (item.trend === "up") { icon = "🔼"; cls = "up"; up++; }
        if (item.trend === "down") { icon = "🔽"; cls = "down"; down++; }

        const card = `
          <div class="card">
            <h3>${icon} ${item.name}</h3>
            <div class="price ${cls}">
              ${item.price} جنيه
            </div>
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

    // رسم أسبوعي
    new Chart(document.getElementById("priceChart"), {
      type: "line",
      data: {
        labels: data.history.dates,
        datasets: [
          {
            label: "الذهب (جنيه)",
            data: data.history.gold,
            borderColor: "#c99700",
            tension: 0.4
          },
          {
            label: "النفط (جنيه)",
            data: data.history.oil,
            borderColor: "#0969da",
            tension: 0.4
          }
        ]
      }
    });

    let newsText =
      up > down
        ? "واصلت أسعار الذهب والنفط ارتفاعها هذا الأسبوع، مدفوعة بحركة الأسواق العالمية."
        : down > up
        ? "شهدت أسعار الطاقة والمعادن تراجعًا نسبيًا خلال الأسبوع."
        : "تحركت أسعار السلع في نطاق مستقر خلال الأسبوع.";

    document.getElementById("news").innerText = "🧠 " + newsText;

    if (up > 0) {
      document.getElementById("alertBox").style.display = "block";
      document.getElementById("alertBox").innerText =
        "⚠️ تنبيه: ارتفاع أسعار الذهب أو النفط خلال الأسبوع.";
    }

    window.stats = { up, down };
  });

function checkTrend() {
  let result =
    window.stats.up > window.stats.down
      ? "📈 الاتجاه العام: صعود"
      : window.stats.down > window.stats.up
      ? "📉 الاتجاه العام: هبوط"
      : "➖ الاتجاه العام: استقرار";

  document.getElementById("trendResult").innerText = result;
}
