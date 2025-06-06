# 🛍️ Digikala Product Scraper

A simple Node.js web scraper built with Puppeteer to extract product information (title, price, and URL) from Digikala search result pages.

---

## ✨ Features

- Scrapes product titles, prices, and links
- Works on Digikala search result pages
- Saves output in clean JSON format
- Easily extendable for multi-page crawling or different e-commerce websites

---

## 🛠️ Tech Stack

- Node.js
- Puppeteer (headless Chrome automation)
- JavaScript (ES6)
- CSS Selectors (DOM parsing)

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com//digikalaproductscraper.git
cd digikalaproductscraper
npm install


---
## 📁 Project Structure
digikalaproductscraper/
├── index.js               # Entry point for scraper
├── utils/
│   └── Utility.js   # Product extraction logic
├── data/
│   ├── sample-output.json      # Here’s a sample of the extracted product data
│   └── products_[Date]T[Time]Z.json      # Saves output as JSON & Final extracted product data
├── package.json
├── README.md
└── LICENSE.md

