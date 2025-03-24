import React, { useContext, useState } from 'react'
import { LuTrash, LuTrash2 } from 'react-icons/lu';
import { EmptyCart } from '../components/EmptyCart';
import { ShopContext } from '../utility/ShopContext';

export const Cart = () => {
 const { products, removeFromCart } = useContext(ShopContext);

  const [Quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = ({product}) => {
    // const updatedProduct = product.qu
    setQuantity((prev) => prev + 1)
  }

  if(!products) return <EmptyCart />;
  return (
    <>
      {products.length > 0 && (
        <div className="flex flex-col space-y-4 w-full">
          <div className="w-full flex items-center sm:flex-wrap md:justify-between md:gap-4 gap-2 py-4 border-b border-gray-200">
            <div className="flex-1">
              <span className="text-gray-700 font-medium uppercase text-md">
                Product
              </span>
            </div>

            <div className="w-1/2 flex items-center space-x-2 justify-between">
              <span className="text-gray-700 font-medium uppercase text-md">
                Price
              </span>
              <span className="text-gray-700 font-medium uppercase text-md">
                Quantity
              </span>

              <span className="text-gray-700  font-medium uppercase text-md">
                Subtotal
              </span>
            </div>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="w-full flex items-center sm:flex-wrap md:justify-between md:gap-4 gap-2 py-4 border-b border-gray-200"
            >
              <div className="flex-1 flex items-center space-x-4">
                <LuTrash
                  onClick={() => removeFromCart(product)}
                  className="w-5 h-5 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out"
                />
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-15 object-cover border border-gray-200 rounded"
                />
                <span className="text-md text-gray-800 truncate">
                  {product.title}
                </span>
              </div>

              <div className="w-1/2 flex items-center space-x-2 justify-between">
                <span className="text-md text-gray-800">$ {product.price}</span>

                <div className="flex items-center justify-center space-x-4 bg-[#F6F7F8] rounded py-1 px-3 mr-6">
                  <button className="text-gray-800 text-md cursor-pointer">
                    -
                  </button>
                  <span className="text-gray-800 text-md">{Quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="text-gray-800 text-md cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span className="text-md text-gray-800">$ {product.price}</span>
              </div>
            </div>
          ))}

          <div className="flex md:items-end md:justify-end pt-6">
            <div className="w-full md:w-1/3 flex flex-col gap-4 border border-gray-200 rounded p-4 md:p-2">
              {/* subtotal and shipping container */}
              <div className="flex flex-col gap-2 py-4 border-b border-gray-200">
                {/* subtotal */}
                <div className="flex items-center justify-between gap-1">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">$ 870</span>
                </div>

                {/* shipping */}
                <div className="flex items-center justify-between gap-1">
                  <span className="text-gray-600">Shipping fee</span>
                  <span className="text-gray-800 font-medium">Free</span>
                </div>

                {/* Coupon */}
                <div className="flex items-center justify-between gap-1">
                  <span className="text-gray-600">Coupon</span>
                  <span className="text-gray-800 font-medium">No</span>
                </div>
              </div>

              {/* bottom total */}
              <div className="flex flex-col gap-2">
                {/* total container */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-lg text-gray-800">
                    Total
                  </span>
                  <span className="font-semibold text-lg text-gray-800">
                    $ 890
                  </span>
                </div>

                <button className="p-2 bg-[#33A0FF] text-white cursor-pointer hover:bg-[#1989EC] transition-colors duration-200 ease-in-out rounded mt-4">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
