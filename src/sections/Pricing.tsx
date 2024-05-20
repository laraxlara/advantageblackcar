import React from "react";
import Link from "next/link";

type Props = {};

function Pricing({}: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div className="border border-red-600 p-6 shadow-sm ring-1 ring-red-600 sm:order-last sm:px-8 lg:p-12 bg-black">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-200">
              Starting at
              <span className="block">in the regular season</span>
              <span className="block italic py-4">June 1 - October 15</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-200 sm:text-4xl">
                {" "}
                50${" "}
              </strong>

              <span className="text-sm font-medium text-gray-100">
                /transfer
              </span>
            </p>
          </div>

          <Link
            href="/book"
            className="mt-8 block border border-red-600 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-red-700 hover:ring-1 hover:ring-red-700 focus:outline-none focus:ring active:text-red-500"
          >
            Book Now
          </Link>
        </div>

        <div className="bg-black border border-gray-200 p-6 shadow-xl sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-200">
              Starting at
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-200 sm:text-4xl">
                {" "}
                40${" "}
              </strong>

              <span className="text-sm font-medium text-gray-100">
                /transfer
              </span>
            </p>
          </div>

          <Link
            href="/book"
            className="mt-8 block border border-red-600 bg-white px-12 py-3 text-center text-sm font-medium text-red-600 hover:ring-1 hover:ring-red-600 focus:outline-none focus:ring active:text-red-500"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
