const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const petaniRoutes = require("./routes/petaniRoutes");
const kendaraanRoutes = require("./routes/kendaraanRoutes");
const penimbanganRoutes = require("./routes/penimbanganRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/petani", petaniRoutes);
app.use("/kendaraan", kendaraanRoutes);
app.use("/penimbangan", penimbanganRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
