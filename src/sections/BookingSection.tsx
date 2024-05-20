import React from "react";
import BookingForm from "@/components/forms/BookingForm";

function BookingSection() {
  return (
    <div id="book" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
            Book your limo
          </h1>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Our easy-to-use booking system allows you to reserve your limo
            quickly and hassle-free. Simply select your desired pickup location
            and time, and leave the rest to us. Our professional drivers will
            ensure that you arrive at your destination safely and on time, so
            you can relax and enjoy your journey.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingSection;
