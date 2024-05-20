import React from "react";
import Image from "next/image";
import Link from "next/link";

import a1 from "../../public/images/a1.jpg";
import a2 from "../../public/images/a2.jpg";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Welcome to Advantage Black Car: Your Premier Martha's Vineyard Limo
            Service
          </h2>
          <p className="mb-4 text-gray-900">
            At Advantage Black Car, we're more than just a transportation
            company – we're a local, family-owned business deeply rooted in the
            community. With a passion for hospitality and a commitment to
            excellence, we strive to provide every customer with a personalized
            and memorable experience. As lifelong residents of Martha's
            Vineyard, we have an intimate knowledge of the island's roads,
            attractions, and hidden gems, allowing us to offer insider tips and
            recommendations to enhance your visit.
          </p>
          <p>
            Our fleet of luxurious vehicles is meticulously maintained to ensure
            your safety, comfort, and satisfaction on every journey.
          </p>
          <Link
            className="group relative my-4 inline-flex items-center overflow-hidden bg-red-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-red-900"
            href="/about"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {" "}
              Read more{" "}
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={a1}
            alt="Formally dressed chauffeur holding the door of a sleek black limousine."
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={a2}
            alt="A businessman elegantly entering a black limousine."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
