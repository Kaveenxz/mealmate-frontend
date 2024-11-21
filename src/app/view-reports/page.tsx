'use client';
import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch all recipes
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRecipes();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-700">All Data</h1>

      {/* Users Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Users</h2>
        <div className="overflow-y-auto max-h-80">
          <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-4 px-6 text-gray-600 font-medium">ID</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Username</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Email</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user: any) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b">{user.id}</td>
                    <td className="py-4 px-6 border-b">{user.username}</td>
                    <td className="py-4 px-6 border-b">{user.email}</td>
                    <td className="py-4 px-6 border-b">{user.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recipes Table */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recipes</h2>
        <div className="overflow-y-auto max-h-80">
          <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-4 px-6 text-gray-600 font-medium">ID</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Name</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Instructions</th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length > 0 ? (
                recipes.map((recipe: any) => (
                  <tr key={recipe.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b">{recipe.id}</td>
                    <td className="py-4 px-6 border-b">{recipe.recipeName}</td>
                    <td className="py-4 px-6 border-b">{recipe.instructions}</td>
                    <td className="py-4 px-6 border-b">{recipe.ingredients}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No recipes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
