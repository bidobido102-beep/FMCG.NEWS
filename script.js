fetch("prices.json")
  .then(response => response.json())
  .then(data => {

    // وقت آخر تحديث
    document.getElementById("updateTime").innerText =
      "آخر تحديث: " + data.lastUpdate;

    let cardsHTML = "";
    let up = 0;
    let down = 0;

    data.categories.forEach(category => {
      category.items.forEach(item => {

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
