import express from "express";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;




app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});