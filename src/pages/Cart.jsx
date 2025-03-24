import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { LuTrash, LuTrash2 } from 'react-icons/lu';
import { EmptyCart } from '../components/EmptyCart';

export const Cart = () => {
 const products = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "weight": 2,
      "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 24,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 5.5,
      "rating": 3.28,
      "stock": 44,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "MVCFH27F",
      "weight": 3,
      "dimensions": {
        "width": 12.42,
        "height": 8.63,
        "depth": 29.13
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 32,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "2817839095220",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 18.14,
      "rating": 3.82,
      "stock": 59,
      "tags": [
        "beauty",
        "face powder"
      ],
      "brand": "Velvet Touch",
      "sku": "9EN8WLT2",
      "weight": 8,
      "dimensions": {
        "width": 24.16,
        "height": 10.7,
        "depth": 11.07
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Levi Hicks",
          "reviewerEmail": "levi.hicks@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 25,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "0516267971277",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    }
  ];

  const [Quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = ({product}) => {
    // const updatedProduct = product.qu
    setQuantity((prev) => prev + 1)
  }

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
                <LuTrash className="w-5 h-5 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out" />
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
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
