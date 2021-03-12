const express = require("express");
const app = express();


app.use("/",express.static("index"));



app.listen(3000);
