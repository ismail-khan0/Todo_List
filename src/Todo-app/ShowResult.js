import React from "react";
import SingleResult from "./SingleResult";
import "./SingleResult.css";

function ShowResult({ items, deleteItem }) {
  return (
    <div className="showResult">
      {items.map((item, index) => (
        <SingleResult key={index} item={item.value} option={item.option} deleteItem={() => deleteItem(item.id)} />
      ))}
    </div>
  );
}

export default ShowResult;

