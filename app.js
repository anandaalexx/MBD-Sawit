const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const petaniRoutes = require("./routes/petaniRoutes");
const kendaraanRoutes = require("./routes/kendaraanRoutes");
const penimbanganRoutes = require("./routes/penimbanganRoutes");
const fakturRoutes = require("./routes/fakturRoutes");
const hargaRoutes = require("./routes/hargaRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cookieparser());

app.use("/users", userRoutes);
app.use("/petani", petaniRoutes);
app.use("/kendaraan", kendaraanRoutes);
app.use("/penimbangan", penimbanganRoutes);
app.use("/faktur", fakturRoutes);
app.use("/harga", hargaRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
