import React from "react";

type Props = {};

function ContactInfo({}: Props) {
  return (
    <div className="bg-white py-24 sm:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Contact Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Need assistance or have inquiries? Reach out to us! Our dedicated
            team is here to help you. Contact us today for bookings, questions,
            or any special requests. Your journey begins with us.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
              Adress
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>80 Indian Hill Rd</p>
              <p>Vineyard Haven</p>
              <p>MA 02568, USA</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
              Email
            </h3>
            <p className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600 hover:text-red-600">
              <a href="mailto: advantageblackcar@gmail.com">
                advantageblackcar@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
              Phone
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>+1 (508) 560-7944</p>
            </address>
          </div>

          {/*TODO: Add social media icons when needed!!! */}

          {/* <div>
            <h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
              Social Media
            </h3>
            <div className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600 flex">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
          
    </div>
  );
}

export default ContactInfo;
