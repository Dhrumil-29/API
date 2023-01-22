require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_KEY);
        console.log("successfully connected to database");
    } catch (error) {
        console.log("unknown error occur while connecting to database");
    }
}
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users",require("./routes/userRoutes"));

app.listen(process.env.PORT,'0.0.0.0',() => {
    console.log(`server is running on port ${process.env.PORT}`);
})
