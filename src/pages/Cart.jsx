import { LuTrash } from 'react-icons/lu';
import { EmptyCart } from '../components/EmptyCart';
import { UseShop } from '../utility/UseShop';

export const Cart = () => {
 const { products, removeFromCart, total, UpdateProductQuantity } =
   UseShop();

  if(!products) return <EmptyCart />;
  return (
    <>
      {products.length > 0 ? (
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

                <input
                  type="number"
                  className="w-16 h-10 border border-gray-200 rounded text-center"
                  onChange={(e) =>
                    UpdateProductQuantity(product, e.target.value)
                  }
                  defaultValue={product.quantity}
                />

                <span className="text-md text-gray-800">$
                 {/* product subtotal price */}
                  {(product.price *
                    product.quantity).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </span>
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
                  <span className="text-gray-800 font-medium"> $ 
                    {total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
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
                  <span className="font-semibold text-lg text-gray-800">$
                    {total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <button className="p-2 bg-[#33A0FF] text-white cursor-pointer hover:bg-[#1989EC] transition-colors duration-200 ease-in-out rounded mt-4">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
