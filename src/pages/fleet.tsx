import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import chevsuv from "../../public/images/fleet/chevy.jpg";
import ford from "../../public/images/fleet/2019-ford-expedition-xlt-max-suv-angular-front.jpg";

const Fleet = () => {
  return (
    <div className="bg">
      <Layout>
        <div className="bg-image"></div>

        <section className="h-full md:bg-transparent py-8 max-w-screen-xl mx-auto flex flex-col gap-24 p-4">
          <h1 className="block text-6xl py-24 text-center text-white">Fleet</h1>
          <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center rounded-xl">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Executive SUV Chevy Suburban
                </h2>

                <p className="text-gray-500 md:mt-4 block">
                  Experience luxury and style with our sleek Chevy Suburban
                  Black Limousine SUV. With its spacious interior, leather
                  seating, and state-of-the-art amenities, you'll arrive in
                  style and make a statement wherever you go. Book now and
                  elevate your journey with our premium limousine service.
                </p>

                <div className="flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <p>6</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-luggage"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                    <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
                    <path d="M6 10h12" />
                    <path d="M6 16h12" />
                    <path d="M9 20v1" />
                    <path d="M15 20v1" />
                  </svg>
                  <p>6</p>
                </div>

                <div className="mt-4 md:mt-8">
                  <Link
                    href="/book"
                    className="inline-block rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white active:bg-gray-800 md:text-base"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <Image
              alt=""
              src={chevsuv}
              className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </div>

          <div className="ovebg-gray-50 sm:grid sm:grid-cols-2 sm:items-center rounded-xl bg-white">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Ford Expedition MAX SUV
                </h2>

                <p className="text-gray-500 md:mt-4 block">
                  Introducing our exceptional offering, the Expedition Platinum
                  Max SUV. Designed to meet all your needs with refined
                  elegance, this SUV embodies luxury and versatility. With its
                  spacious interior, advanced technology, and stylish design, it
                  sets a new standard for upscale travel. Elevate your
                  experience and book your journey with us today.
                </p>
                <div className="flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <p>6</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-luggage"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                    <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
                    <path d="M6 10h12" />
                    <path d="M6 16h12" />
                    <path d="M9 20v1" />
                    <path d="M15 20v1" />
                  </svg>
                  <p>6</p>
                </div>

                <div className="mt-4 md:mt-8">
                  <Link
                    href="/book"
                    className="inline-block rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white active:bg-gray-800 md:text-base"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <Image
              alt=""
              src={ford}
              className="h-full w-full object-cover rounded-xl sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Fleet;
