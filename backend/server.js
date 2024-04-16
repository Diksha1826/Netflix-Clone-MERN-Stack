const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoute");
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/netflix" ,{
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
}).then(()=>{
    console.log("connected to db");
});

app.use("/api/user" , userRoutes);

app.listen(5000 , console.log("server started"));
