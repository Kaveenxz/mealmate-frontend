'use client';
import { useState, useEffect } from "react";
import axios from "../utils/api";
import Header2 from "../components/Header2";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    id: null,
    recipeName: "",
    ingredients: "",
    instructions: "",
    userID: 1,
    adminID: 1, 
    rateID: 0, 
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes"); 
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      await updateRecipe();
    } else {
      await addRecipe();
    }
  };

  const addRecipe = async () => {
    try {
      const payload = {
        ingredients: form.ingredients,
        instructions: form.instructions,
        recipeName: form.recipeName,
        userID: form.userID,
        adminID: form.adminID,
        rateID: form.rateID,
      };
      await axios.post("/api/recipes", payload);
      fetchRecipes();
      resetForm();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  const updateRecipe = async () => {
    try {
      const payload = {
        ingredients: form.ingredients,
        instructions: form.instructions,
        recipeName: form.recipeName,
        userID: form.userID,
        adminID: form.adminID,
        rateID: form.rateID,
      };
      console.log("Updating recipe with ID:", form.id); 
      await axios.put(`/api/recipes/${form.id}`, payload); 
      fetchRecipes(); 
      resetForm(); 
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  const deleteRecipe = async (id: number) => {
    try {
      console.log("Deleting recipe with ID:", id); 
      await axios.delete(`/api/recipes/${id}`); 
      fetchRecipes(); 
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const editRecipe = (recipe: any) => {
    setForm({
      id: recipe.id, 
      recipeName: recipe.recipeName || "", 
      ingredients: recipe.ingredients || "",
      instructions: recipe.instructions || "",
      userID: recipe.userEntity?.id || 1, 
      adminID: recipe.adminEntity?.id || 1,
      rateID: recipe.ratingsEntity?.id || 0,
    });
    setIsEditMode(true);
  };

  const resetForm = () => {
    setForm({
      id: null,
      recipeName: "",
      ingredients: "",
      instructions: "",
      userID: 1,
      adminID: 1,
      rateID: 0,
    });
    setIsEditMode(false);
  };

  return (
    <div className="bg-gray-100 h-screen w-full">
      <div>
        <Header2 />
      </div>
      <div className="mt-10">
        <div className="px-10 lg:px-20">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Manage Recipes</h1>

          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-8">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Recipe Name</label>
              <input
                type="text"
                name="recipeName"
                value={form.recipeName}
                onChange={handleChange}
                className="w-full border-gray-300 border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600 font-medium mb-2">Ingredients</label>
              <textarea
                name="ingredients"
                value={form.ingredients}
                onChange={handleChange}
                className="w-full border-gray-300 border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600 font-medium mb-2">Instructions</label>
              <textarea
                name="instructions"
                value={form.instructions}
                onChange={handleChange}
                className="w-full border-gray-300 border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <button
                type="submit"
                className={` px-4 py-2 rounded ${isEditMode ? "bg-gray-800 text-white" : "bg-gray-800 text-white"} hover:opacity-90`}
              >
                {isEditMode ? "Update Recipe" : "Add Recipe"}
              </button>
              {isEditMode && (
                <button
                  type="button"
                  className="px-6 py-2 rounded bg-gray-400 text-white hover:opacity-90"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-gray-700 font-medium">Name</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Ingredients</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe: any) => (
                <tr key={recipe.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3">{recipe.recipeName || "Untitled"}</td>
                  <td className="px-6 py-3">{recipe.ingredients || "No ingredients"}</td>
                  <td className="px-6 py-3 space-x-2 flex justify-center">
                    <button
                      onClick={() => editRecipe(recipe)}
                      className="px-4 py-2 text-md  text-green-500 rounded hover:opacity-90"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRecipe(recipe.id)}
                      className="px-4 py-2 text-md  text-red-500 rounded hover:opacity-90"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
