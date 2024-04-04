import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./REDUX/slices/todolist/TodoSlice";
const ToDoList = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: input,
      })
    );
    setInput("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
