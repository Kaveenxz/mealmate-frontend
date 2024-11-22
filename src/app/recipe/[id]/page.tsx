'use client';
import Header2 from '@/app/components/Header2';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RecipeDetails(ids:any) {
  const router = useRouter();
  const id = ids.params.id

  const [recipeDetails, setRecipeDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Recipe ID:", id); 
    if (!id) return;

    const fetchRecipeDetails = async () => {
      setLoading(true);
      try {
        const API_KEY = "40733449f25848e48286f6f6e674083a";
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Recipe Details:", data); 
        setRecipeDetails(data);
      } catch (err: any) {
        console.error("Error fetching recipe details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!id) return <p className="text-center text-red-500">Invalid Recipe ID</p>;
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className=" bg-gray-100 h-screen w-full">
        <div>
            <Header2/>
        </div>
      <div className="max-w-4xl mx-auto bg-white mt-10 p-6">
        <h1 className="text-3xl font-bold mb-4">{recipeDetails.title}</h1>
        <img
          src={recipeDetails.image}
          alt={recipeDetails.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipeDetails.extendedIngredients.map((ingredient: any) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
        ></div>

        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="bg-gray-800 text-white px-6 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
