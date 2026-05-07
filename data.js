<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FMCG – السوق المصري</title>

  <!-- تحميل بيانات الأسعار -->
  <script src="data.js"></script>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #111;
      color: #fff;
      margin: 0;
    }

    header {
      background: #222;
      padding: 15px;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
    }

    .container {
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }

    /* ✅ الكارت المحسّن */
    .card {
      background: linear-gradient(145deg, #1e1e1e, #2b2b2b);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 22px;
      border: 1px solid #333;
      box-shadow:
        0 6px 12px rgba(0, 0, 0, 0.75),
        inset 0 1px 1px rgba(255, 255, 255, 0.05);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: #4caf50;
      box-shadow:
        0 10px 18px rgba(0, 0, 0, 0.9),
        inset 0 1px 1px rgba(255, 255, 255, 0.08);
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    p {
      margin: 6px 0;
    }

    .price {
      font-weight: bold;
      font-size: 20px;
      color: #4caf50;
    }

    small {
      color: #aaa;
      display: block;
      margin-top: 8px;
      font-size: 13px;
    }

    .links {
      text-align: center;
      margin: 30px 0;
    }

    .links a {
      color: #4caf50;
      text-decoration: none;
      margin: 0 10px;
      font-weight: bold;
    }
  </style>
</head>

<body>

<header>
  📊 السوق المصري – FMCG
</header>

<div class="container">

  <!-- الذهب -->
  <div class="card">
    <h3>🥇 أسعار الذهب</h3>
    <p>عيار 24: <span id="g24" class="price"></span></p>
    <p>عيار 21: <span id="g21" class="price"></span></p>
    <p>عيار 18: <span id="g18" class="price"></span></p>
    <p>جنيه ذهب: <span id="gp" class="price"></span></p>
    <small id="goldSource"></small>
  </div>

  <!-- الحديد -->
  <div class="card">
    <h3>🏗️ أسعار الحديد</h3>
    <p id="steel" class="price"></p>
    <small id="steelSource"></small>
  </div>

  <!-- الأسمنت -->
  <div class="card">
    <h3>🧱 أسعار الأسمنت</h3>
    <p id="cement" class="price"></p>
    <small id="cementSource"></small>
  </div>

  <!-- شركات FMCG -->
  <div class="card">
    <h3>🏢 شركات السلع الاستهلاكية</h3>
    <p>كوكاكولا: <span id="coca"></span></p>
