"use strict";

// Basic express setup:

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const sassMiddleware = require("node-sass-middleware");
const cookieSession = require("cookie-session");
const cors = require("cors");

const MONGODB_URI = "mongodb://localhost:27017";
const app = express();
app.use(cors());
app.use(
  sassMiddleware({
    /* Options */
    src: "./scss",
    dest: "./public/styles",
    debug: true,
    outputStyle: "compressed",
    prefix: "/styles" // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["a-super-secret-key"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

MongoClient.connect(
  MONGODB_URI,
  (err, client) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
    const db = client.db("tweeter");
    console.log(`Connected to mongodb: ${MONGODB_URI}`);
    const DataHelpers = require("./lib/data-helpers.js")(db);

    const tweetsRoutes = require("./routes/tweets")(DataHelpers);
    app.use("/tweets", tweetsRoutes);
    // db.close();
  }
);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
