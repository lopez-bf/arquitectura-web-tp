const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const asientoRoutes = require("./routes/asientos");

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use('/api', asientoRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));