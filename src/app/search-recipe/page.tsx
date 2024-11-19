import React from 'react'
import Header2 from '../components/Header2'

function page() {
  return (
    <div>
        <Header2/>

        <div>
        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">What are your favorite cuisines?</h2>
          <p className="text-center text-gray-600 mb-10">Personalize Your Experience</p>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Air Fryer Chicken", "Honey Garlic Chicken", "Best Ever Buttermilk Blueberry Muffins"].map((title, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded">
                <div className="bg-gray-300 h-40 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2">
                  Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, 
                  or even a very very short story.
                </p>
              </div>
            ))}
          </div>
        </section>
        </div>
    </div>
  )
}

export default page