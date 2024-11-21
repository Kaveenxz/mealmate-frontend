import React from 'react'
import Header2 from '../components/Header2'
import Link from 'next/link'
function page() {
    const datas = [
        {
            title:"New users",
            desc:"View and Edit new users",
            link:"/new-users"
        },
        {
            title:"Manage Recipes",
            desc:"This includes reviewing new submissions, editing content for clarity and quality, and ensuring all recipes adhere to our guidelines.",
            link:"/recipe-manage"
        },
        {
            title:"View Reports",
            desc:"These reports provide insights into user behavior, recipe performance, content engagement, and community feedback.",
            link:"/view-reports"
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
                <Link href={data.link}>
                <div className="bg-gray-300 h-60 rounded mb-4"></div>
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-gray-600 mt-2">
                 {data.desc}
                </p></Link>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default page