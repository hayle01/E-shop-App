import React, { useEffect, useRef, useState } from 'react'
import { ProductItem } from './ProductItem';
import axios from 'axios';
import { ProductLoadSekeleton } from './ProductLoadSekeleton';
import { FiSearch } from 'react-icons/fi';
export const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const searchRef = useRef(null);
  
    useEffect(() => {
      const fetchProduct = async () =>{
        try {    
          setLoading(true)
          const { data } = await axios.get(
            "https://dummyjson.com/products/category/laptops?limit=100"
          );
            setProducts(data.products);
            setOriginalProducts(data.products);
            setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error.message);
        }
      }
      fetchProduct();
    }, [])

    useEffect(() =>{
      const timerID = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, 300);

      return () => {
        clearTimeout(timerID)
      }
    }, [searchTerm])

    useEffect(() => {

      if(debouncedSearchTerm){
        const fetchProduct = async () => {
          try {
            setLoading(true);
            const { data } = await axios.get(
              `https://dummyjson.com/products/search?q=${searchTerm}`
            );
            setProducts(data.products);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error.message);
          }
        };
        fetchProduct();
      }else{
       setProducts(originalProducts);
      }
    }, [debouncedSearchTerm])

    useEffect(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }, [products]);

    if(Loading) return <ProductLoadSekeleton />

  return (
    <>
      {/* Search product */}
      <div className="mb-4 flex itmes-center space-x-4 border border-gray-300 rounded-full py-2 px-4">
        
        <FiSearch className='w-7 h-7 cursor-pointer text-gray-400' />

        <input
          type="text"
          className="outline-none border-0 cursor-pointer flex-1"
          ref={searchRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
