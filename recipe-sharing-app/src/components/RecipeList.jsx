import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore.js';

const RecipeList = () => {
  const { recipes, filteredRecipes, setSearchTerm, searchTerm, filterRecipes }= useRecipeStore(state => ({
  recipes: state.recipes,
  filteredRecipes: state.filteredRecipes,
  setSearchTerm: state.setSearchTerm,
  searchTerm: state.searchTerm,
  filterRecipes: state.filterRecipes
}));
useEffect(() => {
  filterRecipes(); // Trigger filtering whenever the component mounts or the search term changes
}, [searchTerm, filterRecipes]);
  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
      />
       {/* Optional Additional Filters */}
       <input
        type="text"
        onChange={(e) => setAdditionalFilter('ingredient', e.target.value)}
        placeholder="Filter by ingredient..."
        className="p-2 mb-4 border border-gray-300 rounded-md w-full"
      />
      <input
        type="number"
        onChange={(e) => setAdditionalFilter('cookingTime', e.target.value)}
        placeholder="Filter by cooking time (min)..."
        className="p-2 mb-4 border border-gray-300 rounded-md w-full"
      />
      <ul className="list-none p-0">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <li key={recipe.id} className="flex items-center mb-2 p-2 rounded-md bg-gray-100">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p className="ml-4">{recipe.description}</p>
          </li>
           ))
          ) : (
         <li className="p-2">No recipes found</li> 
        )}
      </ul>
    </div>
  );
};
export default RecipeList;