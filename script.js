fetch("prices.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate;

    let html = "";
    let alert = false;

    data.categories.forEach(cat => {
      cat.items.forEach(item => {

        if (item.trend === "up") alert = true;

        let icon = item.trend === "up" ? "🔼" :
                   item.trend === "down" ? "🔽" : "➖";

        html += `
          <div class="card">
            <h3>${icon} ${item.name}</h3>
            <div class="price">${item.price} جنيه</div>
          </div>
        `;
      });
    });

    document.getElementById("prices").innerHTML = html;

    document.getElementById("news").innerHTML =
      `<p>🧠 ${data.aiNews}</p>`;

    if (alert) {
      document.getElementById("trendResult").innerText =
        "⚠️ تنبيه: ارتفاع أسعار بعض السلع اليوم";
    }
  });

function checkTrend() {
  document.getElementById("trendResult").innerText =
    "📊 راجع الأسعار لمعرفة السلع التي شهدت زيادة";
}
