
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
function App() {
  <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  
};

export default App
