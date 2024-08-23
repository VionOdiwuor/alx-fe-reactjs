import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
    const navigate = useNavigate(); 
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      navigate('/RecipeList'); // Redirect to home or any other page after deletion
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded-md">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;