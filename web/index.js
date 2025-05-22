import express, { json } from "express";
import { moviesRouter } from "../routes/movies.js";
import { corsMiddleware } from "../middlewares/cors.js";
const app = express();
const port = process.env.PORT ?? 3000;
app.disable("x-powered-by");

app.use(json());

app.use(corsMiddleware());

app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log("app running on port: ", port);
});
