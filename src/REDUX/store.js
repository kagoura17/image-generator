import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../REDUX/slices/counte/counterSlice";
import { todoSlice } from "../REDUX/slices/todolist/TodoSlice";
import cartReducer from "../REDUX/slices/cart/cart";

import taskReducer from "../REDUX/slices/todoProgress/taskslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice.reducer,
    cart: cartReducer,

    tasks: taskReducer,
  },
});
