import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage();
await page.goto("http://127.0.0.1:4179/", { waitUntil: "networkidle0" });
await page.pdf({
  path: new URL("../public/murzamatov-aleksandr.pdf", import.meta.url).pathname,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate: `
    <div style="width:100%; font-size:9px; color:#b0b0b0; padding:0 14mm 6mm; font-family:Arial, sans-serif;">
      Мурзаматов Александр • Резюме обновлено 6 октября 2026
    </div>
  `,
  margin: { top: "12mm", right: "0", bottom: "16mm", left: "0" },
});

await browser.close();
