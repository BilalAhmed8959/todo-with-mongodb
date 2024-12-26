import express from "express"
import { addTodo, deleteTodo, editTodo, getAlltodo, getSingletodo } from "../controallers/todo.controallers.js";


const router = express.Router();

router.post("/todo", addTodo);
router.get("/todo", getAlltodo);
router.get("/todo/:id" , getSingletodo)
router.delete("/todo/:id" , deleteTodo)
router.put("/todo/:id", editTodo)

export default router