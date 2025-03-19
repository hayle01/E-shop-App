import React from 'react'
import productData from '../assets/ProductData.json'
export const ProductsList = () => {
    console.log(productData);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
            productData.map(product => (
                <div className=''>

                </div>
            ))
        }
    </div>
  )
}
