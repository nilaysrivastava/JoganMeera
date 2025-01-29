const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./Routes/createUser"));
app.use("/api", require("./Routes/displayData"));
app.use("/api", require("./Routes/orderData"));

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`);
});
