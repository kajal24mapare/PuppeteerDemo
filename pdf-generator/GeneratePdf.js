const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Open the page and navigate to the dummy API
  await page.goto("http://localhost:3000/dummy-api");

  // Extract data from the dummy API response
  const data = await page.evaluate(() => {
    return fetch("http://localhost:3000/dummy-api").then((response) =>
      response.json()
    );
  });

  // Generate dynamic HTML based on the data
  const dynamicHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.title}</title>
      </head>
      <body>
          <h1>${data.title}</h1>
          <p>${data.content}</p>
      </body>
      </html>
    `;

  // Save the generated HTML to a file or do further processing
  // For simplicity, we'll just log it to the console
  // console.log(dynamicHtml);

  // Set the HTML content of the page
  await page.setContent(dynamicHtml);

  // Generate PDF
  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();
