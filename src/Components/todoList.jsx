// src/TodoList.js
import React from 'react';
import Item from './item';
import { useState } from 'react';
import AddTodo from './addTodo';

const list = [
  { id: 1, todo: ' kdnlfdkfld mfskflks ahkdjaksdjnf sf hkfhaksdh fdh fash dkf dkasjdkfasd k asdfkas dfl,ldfjlsdjfl' },
  { id: 2, todo: 'jdnvkjnkvndlsvnklsvd' },
  { id: 3, todo: 'oidsisdlv' },
  { id: 4, todo: 'ftbdbdatbnbrtb' },
  { id: 5, todo: 'bdbzdvdvvds' }
];





export default function TodoList() {

  const [todos, settodos] = useState(list);

  function deleteTodo(id) {
    // settodos(todos.filter((todo) => todo.id !== id));

    const updatedTodos = todos.filter((todo) => todo.id !== id).map((todo, index) => ({
      ...todo,
      id: index+1
    }));
    settodos(updatedTodos);



  }
  function add(todo) {
    settodos([...todos, { id: todos.length + 1, todo: todo }]);
  }


  return (
    <div>
      {todos.map((item) => (
        <Item todo={item} onClick={() => deleteTodo(item.id)} />
      ))}
      <AddTodo onAdd={(todo) => add(todo)} />
    </div>
  );
} 
