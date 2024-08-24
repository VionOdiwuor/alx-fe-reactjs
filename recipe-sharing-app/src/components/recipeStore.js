import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Array to store IDs of favorite recipes
  recommendations: [], // Array to store recommended recipes
  searchTerm: '',
  filteredRecipes: [],
  //add new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] ,
    favorites: state.favorites.filter(favId => favId !== id) // Remove from favorites if necessary
  })),
  //delete recipe by its ID
  deleteRecipe: (id) => set( state=> ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
//action to update recipe by its ID
  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
    // Add a recipe to favorites
   addFavorite: (recipeId) => set(state => ({
      favorites: [...state.favorites, recipeId]
    })),
     // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set(state => {
    // Simple mock recommendation logic: Recommend recipes with a random chance
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Optional action to set all recipes (e.g., for initialization)
  setRecipes: (recipes) => set({ recipes }),
  setFavorites: (favorites) => set({ favorites }),

  // Set recommendations (e.g., initialization)
  setRecommendations: (recommendations) => set({ recommendations }),
// action to set the search term
setSearchTerm: (term) => set(state => {
  const newSearchTerm = term.toLowerCase();
  return {
    searchTerm: newSearchTerm,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(newSearchTerm)
    )
  };
}),
//action to filter the recipe based on search term
filterRecipes: () => set(state => ({
  filteredRecipes: state.recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(state.searchTerm)
  )
})),
  // Ensure filtered recipes are computed initially based on the current search term
  filteredRecipes: (get) => get().recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(get().searchTerm)
  )

}));




export default useRecipeStore