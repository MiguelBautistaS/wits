const puppeteer = require('puppeteer');

(async () => {
  console.log('Lanzamos navegador');
  // const browser = puppeteer.launch();
  const browser = puppeteer.launch({headless: false});

  const page = await (await browser).newPage();
  await (await page).goto('https://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await ((await page).evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  }));

  console.log(titulo1);

  console.log('Cerramos navegador');
  (await browser).close();
  console.log('Navegador cerrado');
})();