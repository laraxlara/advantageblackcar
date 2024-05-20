import React from "react";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="relative h-[500px] md:h-screen flex flex-col items-center justify-center text-center text-white ">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"></div>
      <div className="video-content space-y-2 z-10">
        <section className="bg-transparent">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <Link
              href="/fleet"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full"
              role="alert"
            >
              <span className="text-xs bg-red-700 rounded-full text-white px-4 py-1.5 mr-3">
                Our Fleet
              </span>{" "}
              <span className="text-sm font-medium">See what we offer.</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
              Advantage Black Car
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">
              Elevate your journey with our premium black car service.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                href="#book"
              >
                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                <span className="block border border-red-600 bg-red-600 px-6 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex justify-center items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M7 14h.013" />
                    <path d="M10.01 14h.005" />
                    <path d="M13.01 14h.005" />
                    <path d="M16.015 14h.005" />
                    <path d="M13.015 17h.005" />
                    <path d="M7.01 17h.005" />
                    <path d="M10.01 17h.005" />
                  </svg>
                  <span className="sm:block md:hidden lg:block">Book Now</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
