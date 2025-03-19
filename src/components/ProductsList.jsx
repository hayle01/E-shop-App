import React, { useEffect, useState } from 'react'
import productData from '../assets/ProductData.json'
import { ProductItem } from './ProductItem';
import axios from 'axios';
import { ProductLoadSekeleton } from './ProductLoadSekeleton';
export const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
    useEffect(() => {
      const fetchProduct = async () =>{
        try {    
          setLoading(true)
          const { data } = await axios.get(
            "https://dummyjson.com/products?limit=100"
          );
            setProducts(data.products)
            setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error.message);
        }
      }
      fetchProduct();
    }, [])

    if(Loading) return <ProductLoadSekeleton />
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      { products.length > 0 && products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
