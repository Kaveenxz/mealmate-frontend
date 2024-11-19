import React from 'react'

function UDRecipe(props:any) {
  return (
    <div className=''>
        <div className='bg-gray-200 flex justify-between px-3 py-2 pb-6 border-b-2 border-gray-700'>
            <div className=''>
            <h4 className='text-sm'>{props.recipeyId}</h4>
            <h2 className='font-semibold'>{props.recipeName}</h2>
            </div>

            <div>close</div>
        </div>

        <div>
            <p className='mx-5'>{props.desc}</p>
        </div>
    </div>
  )
}

export default UDRecipe