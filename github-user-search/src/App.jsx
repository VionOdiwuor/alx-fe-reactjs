import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/home';
import search from './components/Search;
import Search from './components/Search';

function App() {
  
  return (
    <>
       <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
