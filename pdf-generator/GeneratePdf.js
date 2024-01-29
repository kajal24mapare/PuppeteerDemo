const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const filename = "ReportTemplate.html";

// Example function to read a file synchronously with query parameters
function readFileSyncWithParameters(filename, queryParameters) {
  const filePath = path.join(__dirname, filename);

  try {
    // Read the file synchronously
    let htmlContent = fs.readFileSync(filePath, "utf-8");
    // Apply query parameters to the content
    for (const [param, value] of Object.entries(queryParameters)) {
      const regex = new RegExp(`{${param}}`, "g");
      htmlContent = htmlContent.replace(regex, value);
    }

    return htmlContent;
  } catch (error) {
    // Handle errors (e.g., file not found)
    console.error("Error reading file:", error);
    return null;
  }
}

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

  const queryParams = { ...data, chartData: JSON.stringify(data?.chartData) };

  try {
    // Read the HTML content from an HTML file
    const fileContent = readFileSyncWithParameters(filename, queryParams);

    if (fileContent !== null) {
      console.log(fileContent);
      // Set the HTML content of the page
      await page.setContent(fileContent);

      // Wait for the content to be fully loaded, including the chart
      await page.waitForFunction(() => {
        return (
          document.getElementById("dynamicContent") !== null &&
          document.getElementById("salesChart") !== null
        );
      });

      //  Generate PDF from the HTML content
      await page.pdf({
        path: "OutputX2.pdf",
        format: "A4",
        printBackground: true,
      });
    }

    console.log("PDF generated successfully!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
    process.exit();
  }
})();
