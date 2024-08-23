import React from 'react';
import { useParams } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm'; // Ensure this path is correct
import DeleteRecipeButton from './DeleteRecipeButton'
  

const RecipeDetails = () => {
  const { id } = useParams(); // Extract recipeId from route parameters
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <div>
        <EditRecipeForm recipeId={recipe.id} />
        <DeleteRecipeButton id={recipe.id} />
        </div>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };
  export default RecipeDetails;