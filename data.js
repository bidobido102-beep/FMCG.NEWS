/* ==================================================
   FMCG MARKET PRICES – EGYPT
   Date: 10 May 2026
   Sources: Local media & official statements
   ================================================== */

const PRICES = {

  /* ========== تاريخ التحديث ========== */
  lastUpdate: "10 مايو 2026",

  /* ========== أسعار الذهب ========== */
  gold: {
    "24": "— جنيه",
    "21": "— جنيه",
    "18": "— جنيه",
    "pound": "— جنيه",
    source: "اليوم السابع – شعبة الذهب"
  },

  /* ========== مواد البناء ========== */
  steel: {
    value: "— جنيه / طن",
    source: "مصراوي – مواد البناء"
  },

  cement: {
    value: "— جنيه / طن",
    source: "بوابة الأهرام – اقتصاد"
  },

  /* ========== السلع الغذائية ========== */
  food: {
    sugar: "— جنيه / كجم",
    oil: "— جنيه / لتر",
    rice: "— جنيه / كجم",
    source: "وزارة التموين – تقارير الأسواق"
  },

  /* ========== السجائر ========== */
  cigarettes: {
    local: {
      cleopatra: "— جنيه"
    },
    imported: {
      marlboro: "— جنيه"
    },
    source: "وزارة المالية – آخر قرار رسمي"
  },

  /* ========== شركات FMCG ========== */
  companies: [
    {
      name: "Coca-Cola",
      status: "لم يتم إعلان تسعير جديد حتى الآن",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
    },
    {
      name: "Pepsi",
      status: "استقرار الأسعار",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Pepsi_logo.svg"
    },
    {
      name: "Edita",
      status: "مراجعة دورية للأسعار",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Edita_Food_Industries_logo.png"
    },
    {
      name: "Eastern Company",
      status: "آخر زيادة وفق القرار الحكومي السابق",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Eastern_Company_logo.png"
    }
  ]
};
