const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");
const app = express();

app.use(express.json());

app.use(cors());
app.use("/person", personRoutes);

mongoose
    .connect(
        "mongodb+srv://adrianoforcellini:wk263X6EQGtTDx@cluster0.fc2tz74.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((r) => {
        app.listen(3000);
    })
    .catch((e) => console.log(e));

app.get("/", (req, res) => {
    res.json({ message: true });
});