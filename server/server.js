import express, { json } from "express";
import devBundle from "./devBundle.js"; // comment this line  when you are working in production mode
import template from "./../template";
import path from "path";
import { QuoteHandler } from "./emailHandler.js";

const app = express();

devBundle.compile(app); // comment this line when you are working in production mode
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.use(
  express.urlencoded({
    extended: true,
    limit: "15mb",
  })
);

app.use(express.json({ limit: "15mb" }));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.post("/api", (req, res, next) => {
  res.status(201).json({
    message: "Sucessfully submitted quote",
  });
  QuoteHandler(req);
});

let port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
