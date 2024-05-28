import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./todoSlice";

const InputElement = ({ value, onChange }) => {
  return (
    <div>
      <input
        name="name"
        placeholder="type name..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const ButtonElement = ({ onClick, value }) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

const Todo = () => {
  const [inputText, setText] = useState("");
  const dispatch = useDispatch();
  const todoMap = useSelector((state) => state.toDos);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleButton = () => {
    dispatch(addTodo(inputText));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = (obj) => {
    dispatch(updateTodo(obj));
  };
  return (
    <>
      <div>Hello Redux toolkit </div>
      <div className={{ display: "inline", width: "100%", maxWidth: "33%" }}>
        <InputElement value={inputText} onChange={(e) => handleText(e)} />
        <ButtonElement onClick={handleButton} value="Submit" />
        <ul>
          {todoMap.map((val, i) => (
            <>
              <li key={i}>
                {val.text}
                <div>
                  <ButtonElement
                    onClick={() =>
                      handleUpdate({ id: val.id, text: inputText })
                    }
                    value="Update"
                  />{" "}
                  <ButtonElement
                    onClick={() => handleDelete(val.id)}
                    value="Delete"
                  />
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
