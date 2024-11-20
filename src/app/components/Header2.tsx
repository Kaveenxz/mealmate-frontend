import React from 'react'
import Link from 'next/link'
function Header2() {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Meal Mate</h1>
                    <nav className="space-x-4">
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                        <Link href="/user-dashboard" className="text-gray-600 hover:text-gray-800">Profile</Link>
                        <Link href="/search-recipe" className="text-gray-600 hover:text-gray-800">Search Recipes</Link>
                        <Link href="/customized-recipes" className="text-gray-600 hover:text-gray-800">Customized Recipes</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Extranal Services</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <button className="text-gray-600 bg-[#E3E3E3] px-4 py-2 rounded"><Link href={"/sign-in"}>Sign in</Link></button>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded"><Link href={"/sign-up"}>Register</Link></button>
                    </nav>
                </div>

            </header>

            <header className='bg-gray-100'>
                <div className="container mx-auto px-4 py-3 flex  justify-end border-t">
                    <div className="relative justify-end flex items-center w-full max-w-md ">
                        <input
                            type="text"
                            placeholder="Search Recipe"
                            className="w-full bg-white rounded-full py-2 px-4 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="absolute left-3 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 15.75l-3.197-3.197m1.697-5.803a6 6 0 11-12 0 6 6 0 0112 0z"
                                />
                            </svg>
                        </span>

                    </div>

                    <button className="text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm-7.5 9a6 6 0 1112 0v1.5h-12V16.5z"
                            />
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header2