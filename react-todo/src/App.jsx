import TodoList from "./component/TodoList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <TodoList/>
      </div>
    </>
  )
};

export default App
