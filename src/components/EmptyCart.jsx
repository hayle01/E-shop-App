import React from 'react'
import emptyCart from '../assets/emptyCart.jpg'
import { Link } from 'react-router';

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={emptyCart} alt="emptycart" className="w-1/3 " />
      <p className="text-gray-700 font-medium text-lg mb-2">
        Your cart is empty
      </p>
      <p className="text-gray-700">{`Add something to make me happy :)`}</p>

      <Link
        to="/products"
        className="bg-[#363842] py-2 px-4  rounded mt-4 text-white text-center"
      >
        Continue shopping
      </Link>
    </div>
  );
}
