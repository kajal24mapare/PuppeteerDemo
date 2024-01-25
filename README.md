# PuppeteerDemo

Demo App

-------------------------------------------------------------------- BASIC SETUP: -------------------------------------------------------------------- 

1. Install Node.js: Make sure you have Node.js installed on your machine.
2. Create a new project folder and initialize it with npm:
   mkdir pdf-generator
   cd pdf-generator
   npm init -y

   Install Puppeteer:
   npm install puppeteer

3. Create your HTML5 template. For this example, let's assume you have an HTML file named ReportTemplate.html.
4. Now, create the PDF generation script. Create a file named GeneratePdf.js in your project folder:
   This script uses Puppeteer to launch a headless Chrome browser, open the HTML template, and generate a PDF file named output.pdf. Adjust the paths and options as needed.
5. node GeneratePdf.js

-------------------------------------------------------------------- DYNAMIC CONTENT: -------------------------------------------------------------------- 
To send parameters to an HTML file and generate a dynamic page based on those parameters, we'll need a combination of HTML, JavaScript, and possibly a server-side language. 

-------------------------------------------------------------------- API: -------------------------------------------------------------------- 
To hit a dummy API in Puppeteer and generate dynamic HTML based on the data received from the API, you can follow these steps:
Set up a dummy API: We can use online mock API services like JSONPlaceholder or create a simple Express server in Node.js for testing purposes.

The script will open a headless browser, visit the dummy API, fetch data, generate dynamic HTML, and log it to the console. You can modify the script to save the HTML to a file or perform additional actions.
Additionally, if you are using an external dummy API, replace the API URL in the script accordingly.
