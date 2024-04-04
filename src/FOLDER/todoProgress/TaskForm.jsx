
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../REDUX/slices/todoProgress/taskslice";

import { Link, useNavigate } from "react-router-dom";
import "./TaskForm.css";
const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: "to do",
    };
    dispatch(addTask(newTask));
    navigate("/list");
  };

  return (
    <div className="task-form-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="sunpm -v
        bmit">Add Task</button>
      </form>
      <h1>
        <Link to="/list"> see all list</Link>
      </h1>
    </div>
  );
};

export default TaskForm;
