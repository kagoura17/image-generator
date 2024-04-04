import { createSlice} from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
export const ToDo2Slice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action)=>{
    state.todos.push(action.payload);
    },
    deleteToDo: (state, action)=>{
        state.todos= state.todos.filter((todo)=>todo.is!==action.payload)
    }
  }
});
export const{addToDo, deleteToDo}=ToDo2Slice.actions
export const selectToDos=(state)=>state.ToDo.todos

   