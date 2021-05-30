import "expect-puppeteer";
import { FAST_TIMEOUT } from "./_defaults/defaults";
import { pages } from "./_defaults/pages";

describe("Riccardo's", () => {
  let page: any;
  beforeAll(async () => {
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
  });

  test(
    `${pages.home.title} loads correctly`,
    async () => {
      await page.goto(pages.home.url);

      const htmlTitle = "h5.list-header";
      await page.waitForSelector(htmlTitle);
      const title = await page.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("Progetti");
    },
    FAST_TIMEOUT
  );

  test(
    `${pages.drinktool.title} loads correctly`,
    async () => {
      await page.goto(pages.drinktool.url);

      const htmlTitle = "h3";
      await page.waitForSelector(htmlTitle);
      const title = await page.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("DrinkTool - Privacy Policy");
    },
    FAST_TIMEOUT
  );

  test(
    `${pages.pageNotFound.title} loads correctly`,
    async () => {
      await page.goto(pages.pageNotFound.url);

      const htmlTitle = "h2";
      await page.waitForSelector(htmlTitle);
      const title = await page.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("Pagina non trovata");
    },
    FAST_TIMEOUT
  );
});
