import mongoose from "mongoose"
import Todos from "../models/todo.models.js"


const addTodo = async (req, res)=>{
const {title, description} = req.body
if (!title || !description) return res.status(400).json({
    message : "title and description is required"
})
try{
    const todo = await Todos.create({
        title , description
    })
    res.status(201).json({
        message: 'todo added successfully',
        data : todo
    })
} catch(err){
    res.status(500).json({
        message: 'internal server error'
    })
}

}
const getAlltodo = async (req, res)=>{
    try{
        const todo = await Todos.find({});
        res.json({
            data : todo
        })
    }catch(err){
        res.status(500).json({
            message: 'internal server error'
        })
    }
}
const getSingletodo = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({errer : "id is not valid id"})
        try{
    const todo = await Todos.findById({_id : id});
    if(!todo) return res.status(404).json({
        message: "no todo fund"
    })
    res.json({
        data: todo
    })

        }catch(err){
            res.status(500).json({
                message: 'internal server error'
            })
        }
        
}


const deleteTodo = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({err :"not valid  id"})
        try{
    const todo = await Todos.findByIdAndDelete({_id : id})
    if(!todo) return res.status(400).json({
        message:"not todo found"
    })
    res.json({
        message: "delete todo",
        deleteTodo : todo
    })
    } catch(err){
        res.status(500).json({
            message: 'internal server error'
        })
    }
}
const editTodo = async (req, res)=>{
    const {id} = body.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({err: "id in not valid"})
    }
    try{
        const todo = await Todos.findByIdAndUpdate(
            {_id : id},
            {
                ...req.body,
            },
            {new: true}

        )
        if(!todo){
            return res.status(404).json({err : " Todo not found!"})
        }
            
    } 
    catch(err){
        res.status(500).json({
            message: 'internal server error'
        })
    }
}
export {addTodo,getAlltodo,getSingletodo,deleteTodo,editTodo}