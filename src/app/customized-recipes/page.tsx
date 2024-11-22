'use client';
import React, { useState, useEffect } from 'react';
import Header2 from '../components/Header2';
import axios from '@/app/utils/api';

function RecipeForm() {
  const [formData, setFormData]:any = useState({
    recipeName: '',
    customInstructions: '',
  });
  const [recipes, setRecipes]:any = useState([]);
  const [loading, setLoading]:any = useState(false);
  const [error, setError]:any = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/customized-recipes');
      setRecipes(response.data);
    } catch (err:any) {
      setError(err.response?.data?.message || 'Failed to fetch recipes');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('/api/customized-recipes', formData);
      setRecipes([...recipes, response.data]); 
      setFormData({ recipeName: '', customInstructions: '' }); 
      alert('Recipe submitted successfully!');
    } catch (err:any) {
      setError(err.response?.data?.message || 'Failed to create recipe');
    }
  };

  const handleDelete = async (id:any) => {
    setError(null);

    try {
      await axios.delete(`/api/customized-recipes/${id}`);
      setRecipes(recipes.filter((recipe:any) => recipe.id !== id));
      alert('Recipe deleted successfully!');
    } catch (err:any) {
      setError(err.response?.data?.message || 'Failed to delete recipe');
    }
  };

  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header2 />

      <div className="mt-10 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md w-96 p-6">
          <h2 className="text-lg font-bold text-center mb-6">Create Customized Recipes</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Recipe Name */}
            <div>
              <label className="block text-gray-600 mb-2">Recipe Name</label>
              <input
                type="text"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleChange}
                placeholder="Butter Chicken Naan"
                className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Custom Instructions</label>
              <textarea
                name="customInstructions"
                value={formData.customInstructions}
                onChange={handleChange}
                placeholder="Describe your custom steps..."
                className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {error && (
        <div className="text-center text-red-500 mt-5">
          <p>{error}</p>
        </div>
      )}

      <div className="mt-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Your Customized Recipes</h2>
        {loading ? (
          <p>Loading recipes...</p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {recipes.map((recipe:any) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg">{recipe.recipeName}</h3>
                <p className="mt-2 text-gray-600">{recipe.customInstructions}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes found. Create one!</p>
        )}
      </div>
    </div>
  );
}

export default RecipeForm;
