'use client';
import React, { useEffect, useState } from 'react';
import Header2 from '../components/Header2';
import { fetchRecipes, searchRecipes } from '../api/recipe/api';
import Link from 'next/link';
function Page() {
  const [recipes, setRecipes]:any = useState([]);
  const [loading, setLoading]:any = useState(true);
  const [error, setError]:any = useState(null);
  const [searchQuery, setSearchQuery]:any = useState('');

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await fetchRecipes();
        setRecipes(data.results);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadRecipes();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchRecipes(searchQuery);
      setRecipes(data.results);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header2 />

      <div>
        <section className="py-6 bg-gray-100">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="flex items-center mb-6">
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
        </section>

        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">
            Find Your Favorite Recipes
          </h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading && <p>Loading recipes...</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
            {!loading &&
              !error &&
              recipes.map((recipe: any) => (
                <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                  <div className="bg-white shadow-md p-4 rounded cursor-pointer hover:shadow-lg transition">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-40 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold">{recipe.title}</h3>
                    <p className="text-gray-600 mt-2">
                      Click to explore this delicious recipe!
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
