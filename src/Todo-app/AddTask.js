import React, { useState } from "react";
import "./Todo.css";

function AddTask(props) {
  const [value, setValue] = useState();
  const [checkBox, setCheckBox] = useState("Pending");

  function InsertTask(e) {
    e.preventDefault();
    props.recieveValue(value, checkBox);
    setValue("");
  }
  
  function inputVal(e) {
    setValue(e.target.value);
  }

  function SelectValue(e) {
    setCheckBox(e.target.value);
  }

  return (
    <div className="add-task">
      <h1 className="a-heading">Add New Task</h1>
      <form onSubmit={InsertTask}>
        <div className="a-task">
          <input
            type="text"
            onChange={inputVal}
            value={value}
            className="a-type"
            required
            placeholder="Add Task"
          ></input>
          <select className="select" onChange={SelectValue}>
            <option value="panding">Panding</option>
            <option value="In Progress">In Progress</option>
            <option value="Data">Data</option>
          </select>
          <button className="add" type="submit">+</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
