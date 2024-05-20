import React from "react";
import ServiceCard from "@/components/services/ServiceCard";

import wedding1 from "../../public/images/wedding1.jpg";
import wedding2 from "../../public/images/wedding2.jpg";
import air1 from "../../public/images/air3.jpg";
import air2 from "../../public/images/air2.jpg";
import co1 from "../../public/images/co1.jpg";
import co2 from "../../public/images/co2.jpg";
import so1 from "../../public/images/so1.jpg";
import out1 from "../../public/images/out1.jpg";
import out2 from "../../public/images/out2.jpg";
import a1 from "../../public/images/a1.jpg";
import a2 from "../../public/images/a2.jpg";
import port1 from "../../public/images/port1.jpg";
import si1 from "../../public/images/si1.jpg";

type Props = {};

function ServicesSection({}: Props) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-black xl:text-white">
            Our Services
          </h2>

          <p className="mt-4 text-gray-700 xl:text-gray-300">
            Discover our comprehensive range of services designed to elevate
            your transportation experience. From luxurious wedding packages to
            efficient airport transfers, we offer a solution for every occasion.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            href="/services/coorporate-limo-service"
            imgSrc1={co1}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={co2}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Coorporate Limo Service"
            description="Transform your corporate travel experience with our premier limo service tailored for Martha's Vineyard."
          />

          <ServiceCard
            href="/services/port-limo-service-oak-bluff’s-and-vineyard-haven"
            imgSrc1={port1}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={a2}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Port Limo Service Oak Bluff’s and Vineyard Haven"
            description="Whether you're arriving at the port Oak Bluff’s from a ferry or setting sail on a scenic adventure, our premium limousine service ensures a seamless
            and stylish journey."
          />

          <ServiceCard
            href="/services/airport-limo-service"
            imgSrc1={air1}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={a1}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Airport Limo Service"
            description="Experience the epitome of luxury and convenience with our Martha's Vineyard airport limo service."
          />

          <ServiceCard
            href="/services/special-occasion-limo-service"
            imgSrc1={wedding1}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={wedding2}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Special Occasion Limo Service"
            description="Whether
            it's the dreamy ambiance of a wedding, the celebratory vibes of a birthday
            party, or the unforgettable moments of a bachelorette party, we ensure
            every detail is taken care of."
          />

          <ServiceCard
            href="/services/sightseeing-limo-service"
            imgSrc1={si1}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={a1}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Sightseeing Limo Service"
            description="Embark on an unforgettable sightseeing adventure through Martha’s Vineyard with our exclusive service for sightseeing in luxury vehicle."
          />

          <ServiceCard
            href="/services/out-of-island-rides"
            imgSrc1={out2}
            altImg1="Newlywedds in a limo holding hands."
            imgSrc2={out1}
            altImg2="Newlywedds in front of a limo toasting with a chapagne."
            name="Out of island rides"
            description="Looking for a safe ride to get you somewhere out of Martha’s Vineyard?
            Advantage Black Car Limo Service offers safe, affordable long distance
            limo and car service."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
