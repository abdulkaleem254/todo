import { useState } from "react";
import "../App.css";
const Input=({handletodo})=>{
    const [todo,settodo]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(todo);
        handletodo(todo)
        settodo("");
        
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="">
                    <form action="#" onSubmit={handleSubmit}>
                        <input type="text" value={todo} placeholder="Enter todo" onChange={(e)=>settodo(e.target.value)}/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Input;