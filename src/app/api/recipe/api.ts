export async function fetchRecipes() {
    const API_KEY = "40733449f25848e48286f6f6e674083a";
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
  
    return response.json();
  }
  
  export async function searchRecipes(query:any) {
    const API_KEY = "40733449f25848e48286f6f6e674083a";
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&apiKey=${API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
  
    return response.json();
  }
  