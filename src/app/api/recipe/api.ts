export async function fetchRecipes() {
  const API_KEY = ""; 
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json(); 
}
