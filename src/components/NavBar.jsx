import React from "react";
import { NavLink } from "react-router";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-opacity-60 backdrop-blur-md bg-white shadow z-10 w-full">
      <div className="max-w-4xl mx-auto py-4 flex justify-between items-center">
        <NavLink to="/" className="text-lg text-gray-900 font-bold">
          E-shop
        </NavLink>

        <ul className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black text-base font-semibold"
                : "text-[#B5B5B5] text-base font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "text-black text-base font-semibold"
                : "text-[#B5B5B5] text-base font-semibold"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "text-black text-base font-semibold"
                : "text-[#B5B5B5] text-base font-semibold"
            }
          >
            About
          </NavLink>
          <NavLink to="cart" className="relative">
            <PiShoppingCartLight size={20}/>

            <span className="absolute -top-1 -right-1 h-4 w-4 text-white text-xs flex items-center justify-center bg-rose-500 rounded-full">
              0
            </span>
          </NavLink>
          <NavLink to="whishlist">
            <MdOutlineFavoriteBorder size={20} />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
