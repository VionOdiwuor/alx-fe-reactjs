import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from "../component/TodoList";
import '@testing-library/jest-dom';
// Test to check if the counter renders correctly
test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
   // Verify that the component and initial todos are rendered
   expect(screen.getByText('Todo List')).toBeInTheDocument();
   expect(screen.getByText('Learn React')).toBeInTheDocument();
   expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
   expect(screen.getByText('Master React Router')).toBeInTheDocument();
 });
// Test to check if a new todo can be added
test('allows users to add a new todo', () => {
    render(<TodoList />); 
      // Simulate typing a new todo and submitting the form
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});
//Test to check if a todo item can be toggled between completed and not completed
test('allows users to toggle a todo as completed/not completed', () => {
  render(<TodoList />);
  
  // Simulate toggling the first todo item
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  
  // Verify that the todo item is marked as completed (line-through style)
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  
  // Simulate toggling the item back to not completed
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

// Test to check if a todo item can be deleted
test('allows users to delete a todo item', () => {
  render(<TodoList />);
  
  // Simulate deleting the first todo item
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  
  // Verify that the todo item is removed from the list
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

/*
test('AddTodoForm', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('AddTodoForm'));
    // Verify if the addtodo is implemented
    expect(screen.getByText(AddTodoForm)).toBeInTheDocument();
}); 

// Test to check if the delete todo button works
test('deleteTodo', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('deleteTodo'));
    // Verify if the delete todo is implemented
    expect(screen.getByText(deleteTodo)).toBeInTheDocument();
});

// Test to check if the toggle todo button works
test('toggleTodo', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('toggleTodo'));
    // Verify if the toggle todo is implemented
    expect(screen.getByText(toggleTodo)).toBeInTheDocument();
});
*/