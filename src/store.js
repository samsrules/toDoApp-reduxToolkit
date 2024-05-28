import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const store = configureStore({
  reducer: {
    toDos: todoReducer,
  },
});

export default store;
