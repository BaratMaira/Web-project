import React from 'react';
import './row.css';
import Cell from '../cell'

function Row(props, editRow, item) {
  return (
    <div className="row">
       <Cell value={props.item.id}/>
       <Cell value={props.item.name}/>
       <Cell value={props.item.age}/>
       <Cell value = {<button onClick={() => props.deleteStudent()}>Delete</button>}></Cell>
       <Cell value = {<button onClick={() => props.editRow()}>Edit</button>}></Cell>
    </div>
  );
}

export default Row;




