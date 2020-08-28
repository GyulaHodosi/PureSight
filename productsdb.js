const products = [
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg",
    description:
      'Sceptre 24" Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)',
    brand: "Sceptre",
    model: "C248W-1920RN",
    price: 129.99,
    screenSize: "24 Inches",
    screenResolution: "1920 x 1080",
    refreshRate: "75Hz",
    link:
      "https://www.amazon.com/Sceptre-Curved-Monitor-Speakers-C248W-1920RN/dp/B07KXSR99Y/ref=sr_1_4?dchild=1&keywords=monitor&qid=1596632545&refinements=p_36%3A10000-15000&rnid=386442011&s=computers-intl-ship&sr=1-4",
  },
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81sC0AwHbBL._AC_SL1500_.jpg",
    description:
      "Dell SE2417HGX 23.6 Inch TN, Anti Glare, LED-Backlit Gaming Monitor (Black) 1 MS Reponse Time, FHD (1920 x 1080) at 60 Hz, Thin Bezel, 2xHDMI, VGA, Tilt and AMD Radeon FreeSync, 24",
    brand: "Dell",
    model: "SE2417HGX",
    price: 166.85,
    screenSize: "24 Inches",
    screenResolution: "1920 x 1080",
    refreshRate: "75Hz",
    link:
      "https://www.amazon.com/Dell-1920x1080-Gaming-Monitor-Model/dp/B07ZHHSB5Y/ref=sr_1_1?dchild=1&keywords=dell+se2417hgx&qid=1595926969&sr=8-1",
  },
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81-53iRCjcL._AC_SL1500_.jpg",
    description:
      "Asus TUF Gaming VG27AQ 27” Monitor, 1440P WQHD (2560 x 1440), IPS, 165Hz (Supports 144Hz), G-SYNC Compatible, 1ms, Extreme Low Motion Blur Sync, Eye Care, DisplayPort HDMI",
    brand: "Asus",
    model: "TUF Gaming VG27AQ",
    price: 547.0,
    screenSize: "27 Inches",
    screenResolution: "2560 x 1440",
    refreshRate: "165Hz",
    link:
      "https://www.amazon.com/ASUS-Gaming-VG27AQ-G-SYNC-Monitor/dp/B07WQ4FXY9/ref=sr_1_9?dchild=1&keywords=monitor&qid=1596631632&refinements=p_36%3A50000-100000&rnid=386442011&s=computers-intl-ship&sr=1-9",
  },
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg",
    description:
      "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black",
    brand: "Acer",
    model: "SB220Q",
    price: 89.99,
    screenSize: "21.5 Inches",
    screenResolution: "1920 x 1080",
    refreshRate: "75Hz",
    link:
      "https://www.amazon.com/Acer-SB220Q-Ultra-Thin-Frame-Monitor/dp/B07CVL2D2S/ref=sr_1_2?dchild=1&keywords=monitor&qid=1598536422&s=computers-intl-ship&sr=1-2",
  },
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg",
    description:
      "Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)",
    brand: "Sceptre",
    model: "C305B-200UN",
    price: 278.99,
    screenSize: "30 Inches",
    screenResolution: "1920 x 1080",
    refreshRate: "200Hz",
    link:
      "https://www.amazon.com/Sceptre-30-inch-Curved-Gaming-Monitor/dp/B07TXM7K4T/ref=sr_1_4?dchild=1&keywords=monitor&qid=1598537108&refinements=p_36%3A25000-40000&rnid=386442011&s=computers-intl-ship&sr=1-4",
  },
  {
    category: "Monitor",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91GIgz2hj%2BL._AC_SL1500_.jpg",
    description:
      'LG 32UL950-W 32" Class Ultrafine 4K UHD LED Monitor with Thunderbolt 3 Connectivity Silver (31.5" Display)',
    brand: "LG",
    model: "32UL950-W",
    price: 1288.72,
    screenSize: "32 Inches",
    screenResolution: "3840 x 2160",
    refreshRate: "200Hz",
    link:
      "https://www.amazon.com/LG-32UL950-W-Ultrafine-Thunderbolt-Connectivity/dp/B07K8877Y5/ref=sr_1_5?dchild=1&keywords=monitor&qid=1598537499&refinements=p_36%3A100000-&rnid=386442011&s=computers-intl-ship&sr=1-5",
  },
  {
    category: "Smart TV",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71wq7qNoBLL._AC_SL1500_.jpg",
    description:
      "Hisense 40-Inch Class H4 Series LED Roku 4K Smart TV with Alexa Compatibility (40H4F, 2020 Model)",
    brand: "Hisense",
    model: "40H4F",
    price: 189.99,
    screenSize: "40 Inches",
    screenResolution: "3840 x 2160",
    link:
      "https://www.amazon.com/Hisense-40-Inch-Class-Compatibility-40H4F/dp/B084B1T8KK/ref=sr_1_17_sspa?dchild=1&keywords=smart+tv&qid=1598537704&sr=8-17-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRMEY0NkpRWUxUSksmZW5jcnlwdGVkSWQ9QTA4MjQzOTQyREZJSThPSlhCRTczJmVuY3J5cHRlZEFkSWQ9QTA0ODE4NzUxUDdEOU1GWUdIVDVXJndpZGdldE5hbWU9c3BfYXRmX25leHQmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
  },
  {
    category: "Smart TV",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg",
    description:
      'Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black',
    brand: "Samsung",
    model: "UN32N5300AFXZA",
    price: 236.29,
    screenSize: "32 Inches",
    screenResolution: "1920 x 1080",
    link:
      "https://www.amazon.com/Samsung-Electronics-UN32N5300AFXZA-1080p-Smart/dp/B07CL4GLQW/ref=sr_1_51?dchild=1&keywords=smart+tv&qid=1598537829&sr=8-51",
  },
  {
    category: "Smart TV",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg",
    description: 'SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV',
    brand: "Samsung",
    model: "QN32Q50RAFXZA",
    price: 497.99,
    screenSize: "32 Inches",
    screenResolution: "3840 x 2160",
    link:
      "https://www.amazon.com/SAMSUNG-QN32Q50RAFXZA-32Q50-Smart-TV2019/dp/B07W5QYD2K/ref=sr_1_70?dchild=1&keywords=smart+tv&qid=1598537908&sr=8-70",
  },
];

export { products };
