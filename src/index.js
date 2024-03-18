import express from "express";
import { SERVER_PORT } from "./config/envConfig.js";
import connectDb from "./config/dbConfig.js";
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./gql-schema/index.js";
const app = express();

// GraphQL Endpoint
app.all("/graphql", createHandler({ schema }));

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.listen(SERVER_PORT, async () => {
  connectDb();
  console.log(`Server listening on port ${SERVER_PORT}`);
});
