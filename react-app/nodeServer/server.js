const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.get("/api", function (req, res) {
  res.json({ message: "Hello from the API(Express)" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
