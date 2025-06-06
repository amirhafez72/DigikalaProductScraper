
//const puppeteer = require('puppeteer');
//const fs = require('fs');
//const utility = require('./utils/Utility.js');
import puppeteer from "puppeteer"; 
import fs from "fs";
import { GenerateNameFileData,autoScroll,getTime } from "./utils/Utility.js";
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
let timeNow = getTime();
console.log(`[${timeNow}] ✅ Start Scraper.`);
(async () => {
  const browser = await puppeteer.launch({ headless: true, executablePath: CHROME_PATH });
  const page = await browser.newPage();

   // Set User-Agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
  //'https://www.digikala.com/search/category-mobile-phone/'; // category mobile
  const url = 'https://www.digikala.com/search/category-mobile-phone/?brands[0]=18&has_selling_stock=1';

  await page.goto(url, { waitUntil: 'networkidle2' });
  await autoScroll(page);
  const products = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('.product-list_ProductList__item__LiiNI');

    elements.forEach(el => {
      const title = el.querySelector('h3')?.innerText || 'بدون عنوان';
      const price = el.querySelector('span[data-testid="price-final"]')?.innerText || 'ندارد';
      const link = el.querySelector('a')?.href || '#';
      const image = el.querySelector('img')?.src || '';
      items.push({ title, price, link, image });
    });

    return items;
  });
  const NAME_FILE_DATA = GenerateNameFileData();
  fs.writeFileSync(`./data/products_${NAME_FILE_DATA}.json`, JSON.stringify(products, null, 2));
  timeNow = getTime();
  console.log(`[${timeNow}] ✅ The information was saved successfully.`);

  await browser.close();
})();
