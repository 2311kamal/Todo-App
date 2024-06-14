import React from 'react'

export default function Item({ todo, onClick }) {
  return (<>
    <div className="item">
      <div className='todoitem'>{todo.id}.  {todo.todo}</div>
      <button  className="dltbtn" onClick={onClick}>Done/Delete</button>

    </div >
    <hr />
  </>
  )
}
