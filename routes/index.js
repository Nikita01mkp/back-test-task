const express = require("express");
const app = express();

const userRouter = require("./user.js");
const adminRouter = require("./admin.js");

app.use('/user', userRouter)
app.use("/api/control", adminRouter);