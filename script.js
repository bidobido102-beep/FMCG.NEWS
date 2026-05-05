fetch("prices.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate;

    let cardsHTML = "";
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

        cardsHTML += `
          <div class="card">
            <h3>${icon} ${item.name}</h3>
            <div class="price ${cls}">
              ${item.price} جنيه
            </div>
          </div>
        `;
      });
    });

    document.getElementById("prices").innerHTML = cardsHTML;

    // رسم بياني
    new Chart(document.getElementById("priceChart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "الأسعار بالجنيه",
          data: values,
          backgroundColor: "#0969da"
        }]
      }
    });

    // خبر AI (جاهز من JSON)
    document.getElementById("news").innerHTML =
      `<p>🧠 ${data.aiNews}</p>`;

    window.marketStats = { up, down };
  });

function checkTrend() {
  if (!window.marketStats) return;

  let { up, down } = window.marketStats;

  let result =
    up > down ? "📈 الاتجاه العام: ارتفاع الأسعار"
    : down > up ? "📉 الاتجاه العام: انخفاض الأسعار"
    : "➖ الاتجاه العام: استقرار";

  document.getElementById("trendResult").innerText = result;
}
