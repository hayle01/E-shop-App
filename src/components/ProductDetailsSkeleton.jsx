import React from 'react'

export const ProductDetailsSkeleton = () => {
  return (
    <>
      <div className="w-30 h-10 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>

      {/* image placeholder */}
      <div className="md:flex mt-6 w-ful">
        <div className="md:mb-0 mb-4 md-w-1/2 pr-4">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse w-96 h-96 rounded border border-gray-300 shadow"></div>

          <div className="pt-4 flex items-center w-96 space-x-2 overflow-auto">
            {Array(4)
              .fill()
              .map((_, idx) => (
                <div
                  key={idx}
                  className="rounded w-24 h-24 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 shadow border border-gray-300"
                ></div>
              ))}
          </div>
        </div>

        <div className="md:w-1/2 pl-4">
          <div className="w-20 h-10 rounded bg-gradient-to-r from-gray-200 to-gray-300 mb-2 shadow animate-pulse"></div>

          <div className="w-20 h-10 rounded bg-gradient-to-r from-gray-200 to-gray-300 shadow animate-pulse"></div>

          <div className="w-1/2 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>

          {/* rating */}
          <div className="mt-6 flex items-center gap-2">
            <div className="w-1/3 rounded h-6 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>

            <div className="w-1/5 h-6 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>

            <div className="w-30 h-6 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>
          </div>

          {/* description */}
          <div className="h-20 mt-6 w-2/3 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>

          <div className="flex items-center justify-between my-4">
            <div className="h-10 w-30 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>

            <div className="h-10 w-30 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>
          </div>

          <div className="flex items-center space-x-2 mt-8">
            <div className="w-3/4 h-12 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>
            <div className="w-1/4 h-12 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse shadow"></div>
          </div>
        </div>
      </div>

      {/* reviewers*/}
      <div className="mt-6 w-40 h-10 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
      <div className="w-full md:flex mt-4 animate-pulse gap-6">
        <div className="w-2/3 h-auto flex flex-col gap-4 mt-4">
          {Array(3)
            .fill()
            .map((_, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="w-10 h-10 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-50 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300 "></div>
                    <div className="w-30 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300 "></div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"
                        ></div>
                      ))}
                  </div>

                  <div
                    className="w-50 h-8 mt-4 rounded bg-gradient-to-r from-gray-200 to-gray-300
                  "
                  ></div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-1/3 mt-4">
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center space-x-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"
                  ></div>
                ))}
            </div>

            <div className="w-30 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {Array(5)
              .fill()
              .map((_, i) => (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
                  <div className="w-[75%] h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
                  <div className="w-8 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
