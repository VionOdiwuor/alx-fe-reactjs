import React, {useState}from 'react'

const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master React Router', completed: false },
  ];

const TodoList = () =>{
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState([]);

// Add a new todo
const AddTodoForm = () => {
    if (newTodo.trim() === '') return;
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

// Toggle completion status of a todo
const toggleTodo = (id) => {
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
};

//delete a todo
const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
};
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent the toggle action
              deleteTodo(todo.id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );


export default TodoList;