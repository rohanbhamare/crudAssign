const express = require("express");
const cors = require("cors");

const mongoose = require("./database/mongoose");
const UsersController = require("./controller/userController");

const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));
app.use("/users", UsersController);

app.listen(3000, ()=>console.log("server started on port 3000"));