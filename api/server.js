const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./database.config.js");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { ApolloEngine } = require('apollo-engine');
const cors = require("cors");

const app = express();
app.use("*", cors());

const todoSchema = require("./graphql/index").todoSchema;
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema: todoSchema,
    context: {},
    tracing: true
  })
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(4000);

//Mongoose promises have different implentation than vanila js
mongoose.Promise = global.Promise;


mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Successfuly connected to database");
  })
  .catch(err => {
    console.log(err);
    console.log("Faild to connect to database, Exiting...");
    process.exit();
  });
