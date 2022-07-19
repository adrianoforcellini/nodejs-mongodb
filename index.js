const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());
app.use("/person", personRoutes);

mongoose
    .connect(
        `mongodb+srv://${process.env.USER_PASS}@cluster0.fc2tz74.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((r) => {
        app.listen(3000);
    })
    .catch((e) => console.log(e));