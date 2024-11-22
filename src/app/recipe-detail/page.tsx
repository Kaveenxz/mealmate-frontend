'use client'
import React, { useState } from "react";
import Header2 from "../components/Header2";

export default function RecipeDetail() {
  const [formValues, setFormValues] = useState({
    title: "BBQ Chicken",
    ingredients: "",
    instructions:
      "Enjoy the smoky, savory flavors of BBQ Chicken with this easy and delicious recipe. Perfectly grilled or baked, this dish features tender chicken coated in a rich and tangy barbecue sauce.",
    acceptTerms: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (formValues.acceptTerms) {
      alert("Recipe added to Meal Cart!");
    } else {
      alert("You must accept the terms and conditions.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
        <div>
            <Header2/>

            <div className="flex justify-center items-center mt-8">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Recipe Detail</h1>
        <p className="text-gray-600 mb-6">View Recipe Detail</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-medium mb-2"
            >
              Ingredients List
            </label>
            <select
              id="ingredients"
              name="ingredients"
              value={formValues.ingredients}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Value</option>
              <option value="Chicken">Chicken</option>
              <option value="BBQ Sauce">BBQ Sauce</option>
              <option value="Spices">Spices</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructions"
              className="block text-gray-700 font-medium mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formValues.instructions}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
              rows={4}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formValues.acceptTerms}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="text-gray-700">
                I accept the terms{" "}
                <a
                  href="#"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  Read our T&Cs
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            Add to Meal Cart
          </button>
        </form>
      </div>
    </div>
        </div>
    </div>
  );
}
