import React from "react";
import ContactForm from "@/components/forms/ContactForm";

function ContactSectionMap() {
  return (
    <section className="text-gray-600 body-font relative h-screen">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          className="gmap_iframe"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=80 Indian Rd, MA &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h1 className="text-gray-900 text-xl mb-2 font-medium title-font font-bold">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSectionMap;
