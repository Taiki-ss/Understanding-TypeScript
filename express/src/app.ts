import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ status: "Accessed!" });
});

app.listen(PORT, () => {
  console.log("starting server...");
});
