import "expect-puppeteer";
import { FAST_TIMEOUT } from "./_defaults/defaults";
import { pages } from "./_defaults/pages";

describe("Riccardo's", () => {
  let testPage = null;
  beforeAll(async () => {
    await page.close();
    testPage = await browser.newPage();
  }, FAST_TIMEOUT);

  afterAll(async () => {
    await testPage.close();
  }, FAST_TIMEOUT);

  test(
    `${pages.home.title} loads correctly`,
    async () => {
      await testPage.goto(pages.home.url);

      const htmlTitle = "h5";
      await testPage.waitForSelector(htmlTitle);
      const title = await testPage.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("Lavoro");
    },
    FAST_TIMEOUT
  );

  test(
    `${pages.drinktool.title} loads correctly`,
    async () => {
      await testPage.goto(pages.drinktool.url);

      const htmlTitle = "h3";
      await testPage.waitForSelector(htmlTitle);
      const title = await testPage.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("DrinkTool · Privacy-Policy");
    },
    FAST_TIMEOUT
  );

  test(
    `${pages.pageNotFound.title} loads correctly`,
    async () => {
      await testPage.goto(pages.pageNotFound.url);

      const htmlTitle = "h2";
      await testPage.waitForSelector(htmlTitle);
      const title = await testPage.$eval(htmlTitle, (e) => e.innerHTML);
      expect(title).toBe("Pagina non trovata");
    },
    FAST_TIMEOUT
  );
});
