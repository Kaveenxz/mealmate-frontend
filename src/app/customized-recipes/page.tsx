'use client';
import React, { useState } from "react";
import Header2 from "../components/Header2";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipeTitle: "",
    ingredientsList: "",
    customNotes: "",
    ratingsAndComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Recipe submitted successfully!");
    // Reset form after submission
    setFormData({
      recipeTitle: "",
      ingredientsList: "",
      customNotes: "",
      ratingsAndComments: "",
    });
  };

  const handleCancel = () => {
    // Reset form when cancel is clicked
    setFormData({
      recipeTitle: "",
      ingredientsList: "",
      customNotes: "",
      ratingsAndComments: "",
    });
  };

  return (
   <div className="bg-gray-100 w-full h-screen">  
    <div>
        <Header2/>
    </div>

    <div className="mt-10 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md w-96 p-6">
        <h2 className="text-lg font-bold text-center mb-6">
          Create Customized Recipes
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-600 mb-2">Recipe Title</label>
            <input
              type="text"
              name="recipeTitle"
              value={formData.recipeTitle}
              onChange={handleChange}
              placeholder="Butter Chicken Naan"
              className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
              required
            />
          </div>

          {/* Ingredients List */}
          <div>
            <label className="block text-gray-600 mb-2">Ingredients List</label>
            <input
              type="text"
              name="ingredientsList"
              value={formData.ingredientsList}
              onChange={handleChange}
              placeholder="Chicken breast"
              className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
              required
            />
          </div>

          {/* Custom Notes */}
          <div>
            <label className="block text-gray-600 mb-2">Custom Notes</label>
            <input
              type="text"
              name="customNotes"
              value={formData.customNotes}
              onChange={handleChange}
              placeholder="Wash the chicken first"
              className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
              required
            />
          </div>

          {/* Ratings & Comments */}
          <div>
            <label className="block text-gray-600 mb-2">Ratings & Comments</label>
            <textarea
              name="ratingsAndComments"
              value={formData.ratingsAndComments}
              onChange={handleChange}
              placeholder="4 Stars"
              className="w-full border-gray-300 border rounded px-4 py-2 focus:ring focus:outline-none"
              rows="3"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
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
   </div>
  );
}

export default RecipeForm;
