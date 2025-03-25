import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

export const UseShop = () => {
    const context = useContext(ShopContext);

    if(context === undefined){
        throw new Error("context is undefined")
    }
  return context
}
