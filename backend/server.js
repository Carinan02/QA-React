const express = require("express");
const dotenv = require("dotenv");
const formsRoute = require("./routes/forms");

dotenv.config();
const app = express();
const port = 3000;
/*
For database connection
NEED TO START MYSQL SERVICE ON CODESPACE RESTART
sudo service mysql status
sudo service mysql start
*/

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/forms", formsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/insert", (req, res) => {
  const test = req.body.key1;

  res.send(`hello ${test}`);
});

app.get("/test", (req, res) => {
  res.send(`This is the test page`);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Frontend-backend connection successful!" });
});
