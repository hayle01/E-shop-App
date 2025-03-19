import React from 'react'

export const ProductLoadSekeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
      Array(9).fill().map((_, index) => (
        <div
          key={index}
          className="bg-white relative rounded-lg shadow-sm border border-gray-300" 
        >
          <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
          {/* image placeholder */}
          <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>

          <div className="p-4">
            {/* title place holder */}
            <div className="w-3/4 h-6 rounded mt-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="flex items-center justify-between m">
                {/* Price placeHolder */}
              <div className="w-20 h-8 rounded bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse mt-4"></div>
              {/* Stock placeholder */}
              <div className="w-20 h-8 rounded bg-gradient-to-r mt-4 from-gray-200 to-gray-300 animate-pulse"></div>
            </div>

            {/* rating placeholder  */}
            <div className="mt-4 w-3/5 rounded h-6 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
