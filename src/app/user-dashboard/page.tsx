import React from 'react'
import Header2 from '../components/Header2'
import UDRecipe from '../components/UDRecipe'

function page() {
    return (
        <div className='bg-gray-100 w-full h-screen'>
            <Header2 />

            <div className='mt-5'>
                <h3 className='text-center font-bold'>We’re thrilled to have you here. Dive into a world of delicious possibilities, where you can explore new recipes,<br /> customize your culinary creations, and keep track of your favorite dishes.</h3>
            </div>

            <div className='flex justify-start mx-5 mt-16 '>
                <h2 className="text-gray-800 text-gray px-8 py-2 rounded-md border bg-white">Recent Activity</h2>
            </div>

            <div className='grid grid-cols-4 gap-10 mx-5 mt-10'>
                <UDRecipe recipeyId={"Recipe 01"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 02"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 03"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 04"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 01"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 01"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 01"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>
                <UDRecipe recipeyId={"Recipe 01"} recipeName={"Air Frier Chicken"} desc={"Sticky Sweet and Spicy Asian Chicken Thighs"}/>

            </div>
        </div>
    )
}

export default page