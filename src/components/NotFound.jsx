import { Link, useRouteError } from "react-router";
import {NavBar} from './NavBar'
import {Footer} from './Footer'

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#363842] mb-4">
            {error.status}
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            {"Sorry, we couldn't find the page you're looking for."}
          </p>
          <Link
            to="/products"
            className="px-4 py-3 bg-[#363842] text-white shadow rounded-lg hover:bg-[#363849] transition-colors duration-200 ease-in-out"
          >
            ← Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
