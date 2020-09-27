const express = require("express");
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");

const userRouter = require("./routes/user.js");
const adminRouter = require("./routes/admin.js");

app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/control", adminRouter);

mongoose.connect("mongodb://localhost:27017/usersdb", {useNewUrlParser: true}, function (err) {
    if (err){
        console.log("ERROR DANGERS THIS IS PROBLEM WITH MONGOOSE");
        return console.log(err);
    }
    app.listen(3000, function () {
        console.log("Сервер ожидает подключения...");
    });
});
mongoose.set('useFindAndModify', false);