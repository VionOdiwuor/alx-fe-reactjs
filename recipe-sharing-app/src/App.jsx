import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';




function App() {


  return (
    <>
      
      <AddRecipeForm />
      <RecipeList />
      <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
