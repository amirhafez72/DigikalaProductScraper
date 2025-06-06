
let timeNow;
// Generate name file data 
export function GenerateNameFileData() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

// log time
export function getTime() {
  const timeNow= new Date();

  const hours = timeNow.getHours().toString().padStart(2, '0');
  const minutes = timeNow.getMinutes().toString().padStart(2, '0');
  const seconds = timeNow.getSeconds().toString().padStart(2, '0');
  const milliseconds = timeNow.getMilliseconds().toString().padStart(3, '0');

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// تابع اسکرول
export async function autoScroll(page) {
  timeNow = getTime();
  console.log(`[${timeNow}] ✅ Start auto scroll.`);
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.getElementById('ProductListPagesWrapper').scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200); // تاخیر برای lazy load
    });
  });
  timeNow = getTime();
  console.log(`[${timeNow}] ✅ End auto scroll.`);
}