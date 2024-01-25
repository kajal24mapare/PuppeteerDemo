const express = require("express");
const app = express();
const port = 3000;

app.get("/dummy-api", (req, res) => {
  // Dummy data
  const data = {
    title: "Hello Kajal!",
    content: "This is dynamic content generated from the dummy API.",
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Dummy API server is running at http://localhost:${port}`);
});
