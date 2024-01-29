const express = require("express");
const app = express();
const port = 3000;

app.get("/dummy-api", (req, res) => {
  // Dummy data
  const data = {
    title: "Hello Kajal",
    content: "This is dynamic content generated from the dummy API.",
    chartData: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Monthly Sales",
          data: [10, 20, 15, 30, 25, 35, 40],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Dummy API server is running at http://localhost:${port}`);
});
