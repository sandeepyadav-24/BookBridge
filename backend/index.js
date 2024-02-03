const express = require("express");
const cors = require('cors');
const connectMongo = require("./db");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
connectMongo();

// Test Route
app.use("/test",(req,res)=>{
    res.status(200).send("This Endpoint is working!");
})

// API Routes
app.use("/auth", require("./routes/auth"));
app.use("/store", require("./routes/store"));

app.listen(PORT);
console.log(`Listening at port ${PORT}`);