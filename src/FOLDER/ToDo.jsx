import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, selectToDos } from "./REDUX/slices/todolist/ToDo2Slice";

const ToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
  const handleAddTodo = () => {
    dispatch(addToDo({}));
  };

  return <></>;
};

export default ToDo;
