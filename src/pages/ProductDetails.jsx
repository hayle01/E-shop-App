import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";
export const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productID}`
        );
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [productID]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const totalReviews = product?.reviews?.length || 0;
  const averageRating =
    totalReviews > 0
      ? product?.reviews?.reduce((sum, review) => sum + review.rating, 0) /
        totalReviews
      : 0;

  const ratingCounts = [1, 2, 3, 4, 5].reduce((acc, rating) => {
    acc[rating] = product?.reviews?.filter(
      (review) => review.rating === rating
    ).length;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(ratingCounts), 1);

  if (!product) return <p>Loading....</p>;

  return (
    <>
      <Link
        to="/products"
        className="px-4 py-3  bg-[#363842] text-white shadow rounded-lg hover:bg-[#363849] transition-colors duration-200 ease-in-out"
      >
        ← Go Back
      </Link>

      <div className="md:flex mt-6 w-full border-b border-gray-200 py-4">
        <div className="md:mb-0 mb-4 md-w-1/2 pr-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-96 rounded border border-gray-300 shadow"
          />
          <div className="pt-4 flex items-center space-x-2 overflow-auto">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={product.title}
                className="rounded cursor-pointer w-24 h-24 object-cover shadow border border-gray-300"
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 pl-4">
          <p className="font-light text-gray-700">
            <span className="text-[#191919] font-medium">
              {" "}
              {product.brand ? "Brand:" : ""}{" "}
            </span>
            {product.brand}
          </p>

          <p className="font-light text-gray-700 pt-2">
            <span className="text-[#191919] font-medium">Availability: </span>
            {product.availabilityStatus}
          </p>
          <h1 className="text-2xl pt-2 font-semibold text-gray-800">
            {product.title}
          </h1>

          {/* rating */}
          <div className="mt-2 flex items-center">
            <span className="text-[#363842] text-2xl">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-300 text-2xl">
              {"★".repeat(Math.round(5 - product.rating))}
            </span>

            <span className="pl-1 font-medium text-lg text-gray-500">
              {product.rating}
            </span>

            <span className="pl-1 font-medium text-lg text-gray-500">
              ({product.reviews.length} reviews)
            </span>
          </div>

          {/* description */}
          <p className="pt-4  text-gray-500 font-light text-md">
            {product.description}
          </p>

          <div className="flex items-center justify-between my-4">
            <p className="text-gray-800 font-semibold text-xl">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-gray-400">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="flex items-center space-x-2 mt-8">
            <Link
              to="#"
              className="w-3/4 py-3 text-center text-white rounded  bg-[#363842] hover:bg-[#363849] transition-colors duration-200 ease-in-out shadow"
            >
              Add to Cart
            </Link>
            <Link
              to="#"
              className="w-1/4 flex items-center justify-center py-3 text-center text-white rounded  bg-[#363842] hover:bg-[#363849] transition-colors duration-200 ease-in-out shadow"
            >
              <GrFavorite size={23} color="white" />
            </Link>
          </div>
        </div>
      </div>

      {/* reviews */}

      <h2 className="text-2xl font-semibold text-[#363842] my-6">Reviews</h2>

      <div className="w-full flex justify-between gap-4 pt-2">
        <div className="flex flex-col space-y-4 md:w-2/3">
          {product?.reviews?.map((review, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 flex gap-4"
            >
              <MdOutlineReviews size={30} className="text-gray-500" />
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-[#363842]">
                    {review.reviewerName}
                  </p>
                  <p className="text-gray-400 text-sm font-light">
                    {formatDate(review.date)}
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-[#363842] text-2xl">
                    {"★".repeat(Math.round(review.rating))}
                  </span>
                  <span className="text-gray-300 text-2xl">
                    {"★".repeat(Math.round(5 - review.rating))}
                  </span>
                </div>

                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/3 p-4">
          <div className="mb-2 flex items-center">
            <span className="text-[#363842] text-3xl pl-4.5">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-300 text-3xl">
              {"★".repeat(Math.round(5 - product.rating))}
            </span>

            <span className="pl-2 font-medium text-xl text-gray-500">
              {product.rating}
            </span>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="w-5 text-right">{rating}</span>
                <div className="h-4 bg-gray-200 w-full rounded relative">
                  <div
                    className="h-4 bg-[#363842] rounded"
                    style={{
                      width: `${(ratingCounts[rating] / maxCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="w-5 text-right">{ratingCounts[rating]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Tabs />/ */}
    </>
  );
};
