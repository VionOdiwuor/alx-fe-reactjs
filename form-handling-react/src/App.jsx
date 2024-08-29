import { useState } from 'react'
import FormikForm from './components/formikForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormikForm />
      </div>
    </>
  )
}

export default App
