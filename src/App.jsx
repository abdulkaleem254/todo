import { useEffect, useState } from "react";
import Input from "./components/Input";
import Showtodo from "./components/Showtodo";

const App = () => {
  const [todoList, setTodoList] = useState(()=>{
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const handletodo = (value) => {
    console.log(value);
    let len = todoList.length;
    console.log(len);

    setTodoList([...todoList, { id: len + 1, task: value, completed: false }]);

  }
  const handleDelete = (item) => {
    let updatedTodos = todoList.filter(list => list.id != item.id);
    updatedTodos = updatedTodos.map((todo, index) => {
      return { ...todo, id: index + 1 };
    })

    setTodoList(updatedTodos);
  }
  const handleComplete = (item) => {
    let updatedTodos = todoList.map((list) => {
      if (list.id == item.id) {
        console.log(list);

        return { ...list, completed: !list.completed }
      }
      return list;
    })
    setTodoList(updatedTodos);

  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));

  }, [todoList]);


  return (
    <>
      <div className="container">
        <h1>TODO Application</h1>
        <Input handletodo={handletodo} />
        <Showtodo todos={todoList} onDelete={handleDelete} onComplete={handleComplete} />
      </div>
    </>
  )
}
export default App;