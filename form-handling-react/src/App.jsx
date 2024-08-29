import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RegistrationForm />
      </div>
    </>
  )
}

export default App
