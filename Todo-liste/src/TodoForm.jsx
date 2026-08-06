import React from "react";
import { useState } from "react";

export const  TodoForm =()=>{
    const [tache,SetTache]=useState("")
    const checks = e =>{
        e.preventDefault();
         
    }
    return(
    <form className="TodoForm" onSubmit={checks}>
        <input type="text" className="todo-input" placeholder="what is the task today?" />

        <button type="submit" className="todo-btn" onChange={(e)=>SetTache(e.target.value)}> 
            Add Task</button>


    </form>)
}