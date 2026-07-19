import { Router } from "express";
import { v7 } from "uuid"; 
import { Todo } from "./todos.types.js";

const router = Router();

const todos: Todo[] = [
      { 
    id: v7(), 
    title: "Калибровка датчиков", 
    content: "Система кислорода ОК", 
    status: "pending" 
  },
  { 
     id: v7(), 
    title: "Синхронизация", 
    content: "Передача данных DSN завершена", 
    status: "completed" 
  }
];

router.get("/", (_req, res) => {
    res.status(200).json(todos);
});

export default router;
 