import React from 'react'
import Header2 from '../components/Header2'
import Link from 'next/link'
import reports from '@/app/image/reports.jpg'
import recipes from '@/app/image/recipes.jpg'
import users from '@/app/image/users.jpeg'
import Image from 'next/image'

function page() {
    const datas = [
        {
            title:"New users",
            desc:"View and Edit new users",
            link:"/new-users",
            img:users
        },
        {
            title:"Manage Recipes",
            desc:"This includes reviewing new submissions, editing content for clarity and quality, and ensuring all recipes adhere to our guidelines.",
            link:"/recipe-manage",
            img:recipes
        },
        {
            title:"View Reports",
            desc:"These reports provide insights into user behavior, recipe performance, content engagement, and community feedback.",
            link:"/view-reports",
            img:reports
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
                <Image src={data.img} alt={"imgs"} className=" h-60 rounded mb-4"/>
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