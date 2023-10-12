import React, { useState } from "react";
import TodoItem from "../@types/TodoItem";
import TodoItemProps from "../@types/TodoItem";
import { useSavedState } from "../hooks/savedState";

const loggedUser = localStorage.getItem("loggeduser");
const defaultUser = "DefaultUser"; // Provide a default user if needed
const App: React.FC = () => {
  const [todos, setTodos] = useSavedState([], "todos");
  const [newTodo, setNewTodo] = useState<TodoItemProps>({
    user: loggedUser !== null ? loggedUser : defaultUser,
    id: todos.length > 0 ? todos.length : -1,
    value: "",
    status: false,
  });
  // Filter for **only** the complete items, and fetch the length.
  const itemsComplete = todos.filter((t: TodoItem) => t.status).length;

  // When the todo input changes, update the state.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Stop the defaults from the browser
    event.preventDefault();

    // Track the input state on input change
    setNewTodo({  user:loggedUser !== null ? loggedUser : defaultUser,id: newTodo.id, value: event.target.value, status: false });
  };

  // On form submission, add the todo and reset the form valie.
  const handleSubmit = (event: React.SyntheticEvent): void => {
    // Stop the defaults from the browser
    event.preventDefault();

    // Set the new todos list, then reset the new todo form.
    setTodos([...todos, newTodo]);
    setNewTodo({
      user:loggedUser,
      id: todos.length,
      value: "",
      status: false,
    });
  };

  // When the "x" is clicked, remove the item from the todos.
  const handleRemoveClick = (_event: React.MouseEvent, id: number) => {
    setTodos(todos.filter((t: TodoItem) => t.id !== id));
  };

  // Whenever a list item is clicked, mark the status complete/incomplete (true/false)
  const handleStatusClick = (_event: React.MouseEvent, id: number) => {
    let items = [...todos];
    let itemIndex = todos.findIndex((t: TodoItem) => t.id === id);
    let item: TodoItem = todos[itemIndex];
    item.status = !item.status;

    setTodos(items);
  };

  const logout=()=>{
    localStorage.removeItem("loggeduser")
    window.location.reload()
  }
  
  return (
    <div>
    <nav className="navBar">
        <ul>
          <li>
            <button onClick={logout}>Logout</button>

          </li>
        </ul>
      </nav>
    <main>

      {/* Page header container */}
      
      <header>
        <div></div>
        <h1>TO DO</h1>
      </header>
      {/* New Todo Container */}
      <div className="new-todo">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter a new task</label>
          {/* Added these items into a div in order to align them horizontally */}
          <div className="new-todo__h">
            <input
              type="text"
              onChange={handleChange}
              value={newTodo.value}
              required
            />
            {/* Clicking the enter key will also submit the form, but it is good practice to have an actual submit button. */}
            <button type="submit">+</button>
          </div>
        </form>
      </div>
      {/* TODOS List */}
      <ul className="todos">
        {/* Map each TODO and render the list item. */}
        
        {renderList && todos.filter((todo:TodoItem)=>todo.user===loggedUser).map((todo: TodoItem) => {
          return (
            
            <li
              className={todo.status ? "todo todo--complete" : "todo"}
              key={todo.id}
            >
              {/* Attached to handler to remove item. */}
              <span onClick={(e) => handleRemoveClick(e, todo.id)}>
                &times;
              </span>
              {/* Attached to handler to toggle item status. */}
              <p onClick={(e) => handleStatusClick(e, todo.id)}>{todo.value}</p>
            </li>
          );
        })}
      </ul>
      {/* {console.log( todos.filter((todo:TodoItem) => todo.user === loggedUser))} */}
      <span>
        {todos.length} items left
      </span>
    </main>
    </div>

  );
};

export default App;