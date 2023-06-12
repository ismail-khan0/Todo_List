import { useState } from 'react'
import './SingleResult.css'

const SingleResult = (props) => {
  const [selection, setSelection] = useState("")

  const SelectValues = (e) => {
    setSelection(e.target.value);
  }

  return (
    <div className='result'>
      <p>{props.item}</p>
      <p>{selection === "" ? props.option : selection}</p>
      <select onChange={SelectValues}>
        <option value="Pending">Pending</option>
        <option value="InProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={props.deleteItem}>x</button>
    </div>
  )
}

export default SingleResult

