import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

import ap from "../../public/images/aboutpage.jpg";
import Link from "next/link";

type Props = {};

function About({}: Props) {
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12 px-4">
        <div className="mx-auto max-w-screen-md px-4 md:px-8 mt-24">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl md:mb-6">
            Our Story: The Journey of Advantage Black Car Limo Service
          </h2>

          <p className="mb-6 text-gray-700 sm:text-lg md:mb-8">
            At Advantage Black Car, we're more than just a transportation
            company – we're a local, family-owned business deeply rooted in the
            community. With a passion for hospitality and a commitment to
            excellence, we strive to provide every customer with a personalized
            and memorable experience. As lifelong residents of Martha's
            Vineyard, we have an intimate knowledge of the island's roads,
            attractions, and hidden gems, allowing us to offer insider tips and
            recommendations to enhance your visit. Our fleet of luxurious
            vehicles is meticulously maintained to ensure your safety, comfort,
            and satisfaction on every journey.
            <br />
            <br />
            From weddings and special occasions to airport transfers and
            sightseeing tours, we pride ourselves on delivering reliable and
            professional service tailored to your needs. As a family-owned
            business, we understand the value of building lasting relationships
            with our customers, and we go above and beyond to exceed your
            expectations.
          </p>

          <h1 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-4">
            About Advantage Black Car Limo Service: Your Choice in Martha's
            Vineyard Transportation
          </h1>

          <p className="mb-6 text-gray-700 sm:text-lg md:mb-8">
            When you choose Advantage Black Car Limo Service, you're not just
            hiring a transportation provider – you're joining our extended
            family. Thank you for trusting us to be a part of your Martha's
            Vineyard experience. We look forward to welcoming you aboard and
            showing you the true meaning of island hospitality.
          </p>

          <ul className="mb-6 list-inside list-disc text-gray-700 sm:text-lg md:mb-8">
            <li>Luxury Fleet</li>
            <li>Exceptional Customer Service</li>
            <li>Effortless Convenience and Reliability</li>
          </ul>

          <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-700 sm:text-lg md:mb-8 md:pl-6">
            “Our professional chauffeurs are not just drivers; they are
            ambassadors of luxury, delivering impeccable service, ensuring your
            journey is as delightful as the destination.”
          </blockquote>

          <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg md:mb-8">
            <Image
              src={ap}
              loading="lazy"
              alt="An elegentntly dressed businesswoman sitting in a luxury black car."
              className="h-full w-full object-cover object-center"
            />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-4">
            Experience Unmatched Comfort and Style with Advantage Black Car Limo
            Service
          </h3>

          <p className="text-gray-700 sm:text-lg">
            Limo service represents more than just transportation; it embodies
            an experience of luxury, comfort, and reliability. From the elegance
            of the vehicles to the professionalism of the chauffeurs, the best
            limo services go above and beyond to ensure that every journey is a
            memorable one. Choosing a reputable limo service guarantees not just
            a ride, but a seamless and enjoyable journey from start to finish.
            So, next time you're in need of transportation, consider the
            unparalleled experience that a top-tier limo service can offer -{" "}
            <Link href="/" className="font-bold">
              Advantage Black Car
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
