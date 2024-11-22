'use client';
import React, { useState } from 'react';
import Header2 from '../components/Header2';
import { searchRecipes } from '../api/recipe/api';

function Page() {
  const [recipes, setRecipes]:any = useState([]);
  const [searchQuery, setSearchQuery]:any = useState('');
  const [error, setError]:any = useState(null);
  const [loading, setLoading]:any = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchRecipes(searchQuery);
      setRecipes(data.results);
    } catch (err:any) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const removeRecipe = (index: number) => {
    setRecipes((prev:any) => prev.filter((_:any, i:any) => i !== index));
  };

  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header2 />

      <div className="mt-5">
        <h3 className="text-center font-bold">
          We’re thrilled to have you here. Dive into a world of delicious
          possibilities, where you can explore new recipes,
          <br />
          customize your culinary creations, and keep track of your favorite
          dishes.
        </h3>
      </div>

      <div className="flex justify-start mx-5 mt-5">
        <form onSubmit={handleSearch} className="flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="flex-grow px-4 py-2 border rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-5">
        <h2 className="text-gray-800 px-8 py-2 rounded-md border bg-white">
          Recent Activity
        </h2>
      </div>

      {loading && <p className="text-center mt-5">Loading recipes...</p>}
      {error && <p className="text-center text-red-600 mt-5">{error}</p>}

      <div className="grid grid-cols-4 gap-10 mx-5 mt-10">
        {recipes.map((recipe:any, index:any) => (
          <div key={recipe.id || index} className="">
            <div className="bg-gray-200 flex justify-between px-3 py-2 pb-6 border-b-2 border-gray-700">
              <div>
                <h4 className="text-sm">Recipe {index + 1}</h4>
                <h2 className="font-semibold">{recipe.title}</h2>
              </div>
              <button
                onClick={() => removeRecipe(index)}
                className="text-red-500 hover:text-red-700"
              >
                close
              </button>
            </div>
            <div>
              <p className="mx-5">{recipe.summary || 'Description not available'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
