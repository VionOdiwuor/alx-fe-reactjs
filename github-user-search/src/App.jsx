import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
       <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
