import "./showtodo.css"
const Showtodo = ({ todos, onDelete, onComplete }) => {
    console.log(todos);
    function handleDelete(item) {
        console.log(item);
        onDelete(item);

    }
    return (
        <>
            <div className="container output">
                {todos.length>0? <table>
                    <tr>
                        <th>#Id</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>



                    {todos.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.completed ? "Completed" : "Not Completed"}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 icon-red" >
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                    </svg></button>
                                    <button onClick={() => onComplete(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 icon-green">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    </button>
                                </td>
                            </tr>

                        )
                    })}
                </table>:
                <div className="no-items">
                    <p>No Items in the list</p>
                </div>
                }
                
            </div>
        </>
    )
}
export default Showtodo;