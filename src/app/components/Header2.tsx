'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";

function Header2() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole"); 

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    router.push("/sign-in");
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Meal Mate</Link>
        </h1>
        <nav className="flex space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link href="/search-recipe" className="text-gray-600 hover:text-gray-800">
                Search Recipes
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
              <button className="text-gray-600 bg-[#E3E3E3] px-4 py-2 rounded">
                <Link href="/sign-in">Sign in</Link>
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                <Link href="/sign-up">Register</Link>
              </button>
            </>
          ) : userRole === "ADMIN" ? (
            <>
              <Link
                href="/admin-dashboard"
                className="text-gray-600 hover:text-gray-800"
              >
                Admin Dashboard
              </Link>
              <Link
                href="/community-interraction"
                className="text-gray-600 hover:text-gray-800"
              >
                Community Interaction
              </Link>
              <Link href="/admin-create" className="text-gray-600 hover:text-gray-800">
                Admin Create
              </Link>
              <Link href="/search-recipe" className="text-gray-600 hover:text-gray-800">
                Search Recipes
              </Link>
              <Link href="/customized-recipes" className="text-gray-600 hover:text-gray-800">
                Customized Recipes
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-100 rounded-full p-2"
                >
                  <FiUser className="text-gray-600 w-5 h-5" />
                  <span className="hidden sm:inline">{userRole}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                    <Link
                      href="/edit-user-profile"
                      className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                    >
                      Profile Edit
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link href="/search-recipe" className="text-gray-600 hover:text-gray-800">
                Search Recipes
              </Link>
              <Link href="/customized-recipes" className="text-gray-600 hover:text-gray-800">
                Customized Recipes
              </Link>
              <Link
                href="/community-interraction"
                className="text-gray-600 hover:text-gray-800"
              >
                Community Interaction
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-100 rounded-full p-2"
                >
                  <FiUser className="text-gray-600 w-5 h-5" />
                  <span className="hidden sm:inline">{userRole}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                    <Link
                      href="/edit-user-profile"
                      className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                    >
                      Profile Edit
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header2;
