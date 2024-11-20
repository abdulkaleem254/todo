import { useEffect, useState } from "react";
import Input from "./components/Input";
import Showtodo from "./components/Showtodo";

const App = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")))
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
    localStorage.setItem("todo", JSON.stringify(todoList));

  }, [todoList]);

  // fetchfunction
  // GitHub username
  const username = 'abdulaleem';

  // GitHub API endpoint
  const url = `https://api.github.com/users/${username}/repos`;

  // Headers object
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    // 'Authorization': 'Bearer YOUR_GITHUB_TOKEN'  Optional, for authenticated requests
  };

  // API call with headers
  fetch(url, {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Response data handle karein
    })
    .catch(error => {
      console.error('Error:', error); // Error handle karein
    });

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