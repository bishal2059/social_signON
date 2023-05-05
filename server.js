require("dotenv").config();

const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const runServer = async function () {
  try {
    mongoose.connect(process.env.MONGO_URL);

    const db = mongoose.connection;
    db.on("error", (err) => {
      console.log(err.message);
      throw new Error("Database connection failed");
    });

    db.once("open", () => {
      console.log("Database connected successfully!!");
    });
    const PORT = process.env.PORT || 8000;

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`The server is listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

runServer();
