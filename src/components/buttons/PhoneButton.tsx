import React from "react";

type Props = {};

function PhoneButton({}: Props) {
  return (
    <a
      className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring w-full"
      href="tel:1 (508) 560-7944"
    >
      <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
      <span className="block border border-red-600 bg-red-600 px-6 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex justify-center items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-phone"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
        <span className="sm:block md:hidden lg:block">+1 (508) 560-7944</span>
      </span>
    </a>
  );
}

export default PhoneButton;
