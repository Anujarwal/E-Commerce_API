const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;

cors();
// Root Dirc

app.use("/api/" , require("./Routes/e-CommercesRoute"))

app.get("/", (req, res) => {
  res.json({ msg: "E-Comerces" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server is ready port : ${PORT}`);
});
