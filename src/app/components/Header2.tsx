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
                        <Link href="/community-interraction" className="text-gray-600 hover:text-gray-800">Extranal Services</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <button className="text-gray-600 bg-[#E3E3E3] px-4 py-2 rounded"><Link href={"/sign-in"}>Sign in</Link></button>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded"><Link href={"/sign-up"}>Register</Link></button>
                    </nav>
                </div>

            </header>

            
        </div>
    )
}

export default Header2