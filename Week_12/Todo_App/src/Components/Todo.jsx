import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'

function Todo({todo,onRemoveTodo,onUpdateTodo}){

    const{id,content} = todo;
    const [editable , setEditable] = useState (false)
    const [editTodo, setEditTodo] = useState(content)

    const removeTodo = () =>{
        onRemoveTodo(id);
    }

    const updateTodo = () =>{
        const request = {
            id :id,
            content : editTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return(
        <div className="todo" >
            <div>
                {
                editable ? <input  className="todo-input" type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} /> : content
                
                }
            </div>
            <div>
  
            <IoIosRemoveCircle className="todo-icons" onClick={removeTodo}/>
                {
                    editable ?   <FaCheck className="todo-icons" onClick={updateTodo}/> 
                     :  <FaEdit className="todo-icons" onClick={()=> setEditable(true)} />
                }
            
           
            </div>
        </div>
    )
}

export default Todo