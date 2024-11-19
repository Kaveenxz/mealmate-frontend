'use client'
import React, { useState } from "react";
import Header2 from "../components/Header2";

export default function page() {
  const [recipe, setRecipe] = useState({
    name: "",
    id: "",
    image: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };


  const handleDelete = () => {
    console.log("Recipe deleted:", recipe.id);
  };

  return (
    <div className="h-screen bg-gray-100">
        <div>
            <Header2 />
        </div>
        <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">Delete Recipes</h1>
        <a href="#" className="text-blue-600 text-sm mb-4 inline-block">
          View Recipes
        </a>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            placeholder="Enter recipe name"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Recipe ID
          </label>
          <select
            name="id"
            value={recipe.id}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select ID</option>
            <option value="1">Recipe 1</option>
            <option value="2">Recipe 2</option>
            <option value="3">Recipe 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Image
          </label>
          <textarea
            name="image"
            value={recipe.image}
            onChange={handleInputChange}
            placeholder="image.jpg"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-sm text-gray-700"
          >
            I accept the terms <a href="#" className="text-blue-600">Read our T&Cs</a>
          </label>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleDelete}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
