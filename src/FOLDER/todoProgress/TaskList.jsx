import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStatus,
  deleteTask,
} from "../../REDUX/slices/todoProgress/taskslice";

import { Link } from "react-router-dom";
import "./TaskList.css";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStatusChange = (taskId, newStatus) => {
    dispatch(changeStatus({ taskId, newStatus }));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <div>
        <label htmlFor="filter">Filter by Status:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="to do">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Status: {task.status}</div>
            {task.status === "to do" && (
              <button
                onClick={() => handleStatusChange(task.id, "in progress")}
              >
                Start
              </button>
            )}
            {task.status === "in progress" && (
              <button onClick={() => handleStatusChange(task.id, "done")}>
                Complete
              </button>
            )}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/">go back</Link>
    </div>
  );
};

export default TaskList;
