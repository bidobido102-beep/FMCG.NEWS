fetch("prices.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate;

    let globalHTML = "";
    let localHTML = "";
    let labels = [];
    let values = [];

    let up = 0;
    let down = 0;

    data.categories.forEach(cat => {
      cat.items.forEach(item => {

        labels.push(item.name);
        values.push(item.price);

        let icon = "➖";
        let cls = "stable";

        if (item.trend === "up") {
          icon = "🔼";
          cls = "up";
          up++;
        }

        if (item.trend === "down") {
          icon = "🔽";
          cls = "down";
          down++;
        }

        const card = `
          <div class="card">
            <h3>${icon} ${item.name}</h3>
            <div class="price ${cls}">
              ${item.price}
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

    // رسم بياني
    new Chart(document.getElementById("priceChart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "الأسعار",
          data: values,
          backgroundColor: "#0969da"
        }]
      }
    });

    // خبر يتغير حسب الاتجاه
    let newsText =
      up > down
        ? "تشهد الأسواق اليوم موجة ارتفاع في أسعار عدد من السلع، مدفوعة بتغيرات في التكاليف العالمية."
        : down > up
        ? "سجلت أسعار بعض السلع تراجعات اليوم مع تحسن نسبي في معدلات العرض."
        : "سادت حالة من الاستقرار النسبي في أسعار السلع دون تغيرات حادة.";

    document.getElementById("news").innerHTML = "🧠 " + newsText;

    // تنبيه عند الغلاء
    if (up > 0) {
      document.getElementById("alertBox").style.display = "block";
      document.getElementById("alertBox").innerText =
        "⚠️ تنبيه: تم تسجيل ارتفاع في أسعار بعض السلع اليوم";
    }

    window.stats = { up, down };
  });

function checkTrend() {
  if (!window.stats) return;

  let { up, down } = window.stats;

  let result =
    up > down ? "📈 الاتجاه العام: ارتفاع الأسعار"
    : down > up ? "📉 الاتجاه العام: انخفاض الأسعار"
    : "➖ الاتجاه العام: استقرار";

  document.getElementById("trendResult").innerText = result;
}
