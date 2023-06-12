import React, { useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import ShowResult from "./ShowResult";

function Todo() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ pending: true, inProgress: true, done: true });

  function recieveValue(newValue, checkBoxValue) {
    const newItem = { id: items.length, value: newValue, option: checkBoxValue, isChecked: true };
    setItems([...items, newItem]);
  }

  function updateFilters(newFilters) {
    setFilters(newFilters);
  }

  const filteredItems = items.filter(item => filters[item.option.toLowerCase()]);

  return (
    <div className="todo">
      <h1 className="heading">To do App</h1>
      <FilterTask filters={filters} updateFilters={updateFilters} />
      <AddTask recieveValue={recieveValue} />
      <ShowResult items={filteredItems} deleteItem={id => {
        setItems(items.filter(item => item.id !== id));
      }} />
    </div>
  );
}

export default Todo;



