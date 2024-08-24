import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  //add new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] 

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

  // Optional action to set all recipes (e.g., for initialization)
  setRecipes: (recipes) => set({ recipes }),

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