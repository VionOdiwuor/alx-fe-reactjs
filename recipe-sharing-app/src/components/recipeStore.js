import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] 

  })),
  
  deleteRecipe: (id) => set( state=> ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  // Optional action to set all recipes (e.g., for initialization)
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore