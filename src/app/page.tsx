'use client';
import Head from "next/head";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import { fetchRecipes } from "./api/recipe/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Check user login status
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }

    // Load recipes
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

  return (
    <>
      <Head>
        <title>Meal Mate</title>
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header2 />
        <section className="text-center py-16 bg-gray-100">
          <h1 className="text-4xl font-bold">MEAL MATE</h1>
          <p className="text-gray-600 mt-4">
            We're thrilled to have you here. Dive into a world of delicious possibilities, 
            where you can explore new recipes, customize your culinary creations, 
            and keep track of your favorite dishes.
          </p>
          <div className="mt-6 space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href={"sign-in"} className="bg-gray-800 text-white px-6 py-2 rounded">
                  Login
                </Link>
                <Link href={"sign-up"} className="bg-gray-600 text-white px-6 py-2 rounded">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={userRole === "ADMIN" ? "/admin-dashboard" : "/user-dashboard"}
                  className="bg-gray-800 text-white px-6 py-2 rounded"
                >
                  {userRole === "ADMIN" ? "Admin Dashboard" : "User Dashboard"}
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userRole");
                    setIsLoggedIn(false);
                  }}
                  className="bg-gray-600 text-white px-6 py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </section>

        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">What are your favorite cuisines?</h2>
          <p className="text-center text-gray-600 mb-10">Personalize Your Experience</p>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading && <p>Loading recipes...</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
            {!loading &&
              !error &&
              recipes.map((recipe:any) => (
                <div key={recipe.id} className="bg-white shadow-md p-4 rounded">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold">{recipe.title}</h3>
                  <p className="text-gray-600 mt-2">
                    Explore this delicious recipe now!
                  </p>
                </div>
              ))}
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Contact us</h2>
            <form className="max-w-lg mx-auto space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Contact Num</label>
                <input
                  type="text"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="+9476454878"
                />
              </div>
              <button className="w-full bg-gray-800 text-white px-6 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
