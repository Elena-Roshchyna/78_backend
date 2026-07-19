import express from "express";
import todoRoutes from "./todos.routes.js";

const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
