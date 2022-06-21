const express = require("express");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 8000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db");

console.log(require("dotenv").config());

console.log(process.env), "env-------------------";

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`${port}, its working`));
