const puppeteer = require("puppeteer");

const generatePDF = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load your HTML template
  await page.goto(`file://${__dirname}/ReportTemplate.html?name=KAJAL`, {
    waitUntil: "networkidle0",
  });

  // Generate PDF
  await page.pdf({
    path: "report.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  console.log("PDF generated successfully!");
};

generatePDF();
