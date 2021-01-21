import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './todo.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  // example object { id: 1, name: 'Todo 1', complete: true },
  const [todos, setTodos] = useState([]);

  // ref provides the value of the input
  const todoNameRef = useRef(null);

  // Retrieve existing todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Add todos to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Toggle current state of the todo
  const toggleTodo = (id) => {
    const newTodos = [...todos]; // use a copy of the todos
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  // Add a new todo
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  // Filter for incomplete todos
  const handleClearTodos = () => {
    const newTodos = [...todos].filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>What can you learn from a basic React Todo List?</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div class='remaining'>
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </>
  );
}

export default App;
