import React from 'react'
import Header2 from '../components/Header2'

function page() {
    const datas = [
        {
            title:"New users",
            desc:"View and Edit new users"
        },
        {
            title:"Pending approvals",
            desc:"These include new user registrations, submitted recipes, and community posts. Your timely review ensures our platform remains safe, high-quality, and engaging for all users."
        },
        {
            title:"Rejected Recipies",
            desc:"The following recipes have been reviewed and unfortunately do not meet our community guidelines and standards."
        },
        {
            title:"Manage Recipes",
            desc:"This includes reviewing new submissions, editing content for clarity and quality, and ensuring all recipes adhere to our guidelines."
        },
        {
            title:"Key Metrics",
            desc:"These metrics include user engagement, recipe views, submission rates, user feedback, and overall community growth."
        },
        {
            title:"View Reports",
            desc:"These reports provide insights into user behavior, recipe performance, content engagement, and community feedback."
        }

    ]
  return (
    <div>
        <Header2/>

        <section className="py-12 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Overview of the site Activity</h2>
          <p className="text-center text-gray-600 mb-10">current situation of the page</p>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {datas.map((data, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded">
                <div className="bg-gray-300 h-60 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-gray-600 mt-2">
                 {data.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default page