import "expect-puppeteer";
import ReactDOM from "react-dom";
import App from "./App";

describe("App", () => {
  let page;

  beforeAll(async () => {
    page = await browser.newPage();
  });
});
