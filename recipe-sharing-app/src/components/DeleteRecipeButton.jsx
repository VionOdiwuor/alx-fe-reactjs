import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded-md">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;