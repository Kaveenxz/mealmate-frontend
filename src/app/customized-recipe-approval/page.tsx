'use client'
import React, { useState } from "react";
import Header2 from "../components/Header2";

export default function RecipeApproval() {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "5 Minute Keto Pizza",
            description:
                "Craving pizza but short on time? This 5 Minute Keto Pizza is the perfect solution! Quick, easy, and low-carb, it's made with simple ingredients to satisfy.",
            approved: false,
        },
        {
            id: 2,
            title: "Chicken and Rice Casserole",
            description:
                "Comfort food at its best! This Chicken and Rice Casserole is a hearty and delicious dish that combines tender chicken, fluffy rice, and a creamy sauce.",
            approved: false,
        },
        {
            id: 3,
            title: "Brownie Cookies",
            description:
                "Indulge in the best of both worlds with these Brownie Cookies! They have the rich, fudgy flavor of brownies and the chewy texture of cookies.",
            approved: false,
        },
    ]);

    const handleApprove = (id:any) => {
        setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe.id === id ? { ...recipe, approved: true } : recipe
            )
        );
    };

    const handleReject = (id:any) => {
        setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe.id !== id)
        );
    };

    return (
        <div className=" bg-gray-100 w-full">
            <div>
                <Header2 />
            </div>
            <div className="flex flex-col ">
                <div className=" bg-white p-6 mt-10">
                    <h1 className="text-2xl font-bold mb-2">Customized Recipe Approval</h1>
                    <p className="text-gray-600 mb-6">Approve or Reject Recipes</p>

                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="flex items-start justify-start gap-6 mb-4 p-4 border rounded-lg bg-gray-50"
                        >
                            <div className="bg-gray-200 h-32 w-32"></div>

                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold">{recipe.title}</h2>
                                    <p className="text-gray-600">{recipe.description}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleApprove(recipe.id)}
                                        className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 border border-black"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(recipe.id)}
                                        className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 border border-black"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {recipes.length === 0 && (
                        <p className="text-center text-gray-500 mt-6">
                            No recipes left for approval!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
