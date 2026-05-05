fetch("prices.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate;

    let html = "";

    data.categories.forEach(category => {
      html += `<h2>${category.name}</h2>`;

      category.items.forEach(item => {
        let icon = "➖";
        if (item.trend === "up") icon = "🔼";
        if (item.trend === "down") icon = "🔽";

        html += `
          <div class="item">
            ${icon} <strong>${item.name}</strong><br>
            السعر: ${item.price} جنيه
          </div>
        `;
      });
    });

    document.getElementById("prices").innerHTML = html;
  });
