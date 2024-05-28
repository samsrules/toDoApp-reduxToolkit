import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  initialState: [],
  name: "to-do",
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const todoDel = state.findIndex(
        (val, index) => val.id === action.payload
      );
      if (todoDel !== -1) {
        state.splice(todoDel, 1);
      }
    },
    updateTodo: (state, action) => {
      const updateArr = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
      return updateArr;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
