import express from "express";
import morgan from "morgan";

const app = new express();

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

app.use(express.json());
app.use(morgan("tiny"));

app.get("/hello", (_, res) => {
  res.status(200).json({ message: "hello world" });
});

app.post("/datasent/:id", (req, res) => {
  console.log("body ", req.body);
  console.log("params ", req.params);
  console.log("query ", req.query);
  res.status(200).json("data posted successfully");
});
