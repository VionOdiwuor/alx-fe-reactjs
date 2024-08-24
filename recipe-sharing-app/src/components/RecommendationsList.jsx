import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  // Extract necessary states and actions from the Zustand store
  const { recommendations, generateRecommendations } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations
  }));

  // Generate recommendations when the component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-4 p-2 border rounded-md">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
