import React from 'react'
import Header2 from '../components/Header2'

function page() {
  return (
    <div className='bg-gray-100 w-full h-screen'>
        <Header2/>

        <div className='my-6'>
        <section className="py-12 bg-white mx-[30%]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Edit User Profile</h2>
            <form className="max-w-lg mx-auto space-y-6">
            <div>
                <label className="block text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="jhon"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="doe"
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
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full border-gray-300 border rounded px-4 py-2"
                  placeholder="your password"
                />
              </div>
              
              <button className="w-full bg-gray-800 text-white px-6 py-2 rounded">
                Register
              </button>
            </form>
          </div>
        </section>

        </div>
    </div>
  )
}

export default page