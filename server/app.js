const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const auth = require("./routes/auth");
const http = require("http");
const app = express();
const server = http.createServer(app);

dotenv.config({ path: "./config.env" });
console.log("Database connected successfully", process.env.DB_CONNECTION);

mongoose.connect(Dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error: "));
db.once("open", function () {
    console.log("Database connected successfully");
});

app.use(express.json());

app.use("/api/auth", auth);

server.listen(4000, () => {
    console.log(`Port is running at 5000`);
});
