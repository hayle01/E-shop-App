import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { Link } from 'react-router';
export const ProductItem = ({product}) => {
  return (
    <Link
      to={`/products/${product.id}`}
      key={product.id}
      className="bg-white relative rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out  border border-gray-300"
    >
      <div className="absolute top-2 right-2 p-2 flex items-center justify-center bg-[#363842] rounded-full">
        <GrFavorite size={20} color="white" />
      </div>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="mb-2 text-gray-900 font-bold text-md">{product.title}</p>
        <p className="text-gray-600 mb-2 truncate">{product.description}</p>

        <div className="flex items-center justify-between m">
          <p className="text-gray-800 font-semibold text-xl">
            ${product.price.toFixed(2)}
          </p>
          <span className="text-gray-400">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>

        <div className="mt-4">
          <span className="text-[#363842] text-xl font-bold">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-300 text-xl font-bold">
            {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
      </div>
    </Link>
  );
}
