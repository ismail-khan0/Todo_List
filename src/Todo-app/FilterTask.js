import React from "react";

const FilterTask = (props) => {
  
  const { filters, updateFilters } = props;

  const handleCheckboxChange = (e) => {
    updateFilters({ ...filters, [e.target.value]: e.target.checked });
  }

  return (
    <div>
      <p className="txt">Filter Tasks</p>
      <div className="box">
        <input type="checkbox" className="box1" value="pending" checked={filters.pending} onChange={handleCheckboxChange}></input> <label>Pending</label>
        <input type="checkbox" className="box1" value="in progress" checked={filters['in progress']} onChange={handleCheckboxChange}></input>
        <label>In Progress</label>
        <input type="checkbox" value="done" className="box1" checked={filters.done} onChange={handleCheckboxChange}></input>
        <label>Done</label>
      </div>
    </div>
  );
};

export default FilterTask;
