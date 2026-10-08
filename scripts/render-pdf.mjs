import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const resumes = [
  {
    url: "http://127.0.0.1:4179/",
    file: "../public/murzamatov-aleksandr.pdf",
    footer: "Мурзаматов Александр • Резюме обновлено 8 октября 2026",
  },
  {
    url: "http://127.0.0.1:4179/en",
    file: "../public/murzamatov-aleksandr-en.pdf",
    footer: "Aleksandr Murzamatov • Resume updated 8 October 2026",
  },
];

const page = await browser.newPage();

for (const resume of resumes) {
  await page.goto(resume.url, { waitUntil: "networkidle0" });
  await page.pdf({
    path: new URL(resume.file, import.meta.url).pathname,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `
      <div style="width:100%; font-size:9px; color:#b0b0b0; padding:0 14mm 6mm; font-family:Arial, sans-serif;">
        ${resume.footer}
      </div>
    `,
    margin: { top: "12mm", right: "0", bottom: "16mm", left: "0" },
  });
}

await browser.close();
