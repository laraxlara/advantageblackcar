import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import Loader from "../Loader";
import Success from "./Success";
// import Error from "./Error";
import axios from "axios";

type Props = {};

type FormData = {
  nameContact: string;
  emailContact: string;
  subjectContact: string;
  messageContact: string;
};

const ContactForm = (props: Props) => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await axios.post("api/contact/", data);

      console.log(response.config.data);
      if (response) {
        setSent(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setError(false);
  });

  return (
    <>
      {error ? <h1>Error</h1> : null}
      {loading ? (
        <>
          <Loader />
        </>
      ) : sent && !error && !loading ? (
        <div className="w-full md:w-1/2 m-auto">
          <Success />
        </div>
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="nameContact"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                id="nameContact"
                {...register("nameContact")}
                onChange={handleInputChange}
                name="nameContact"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-red-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="emailContact"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="emailContact"
                {...register("emailContact")}
                onChange={handleInputChange}
                name="emailContact"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-red-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subjectContact"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                id="subjectContact"
                {...register("subjectContact")}
                onChange={handleInputChange}
                name="subjectContact"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-red-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="messageContact"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="messageContact"
                {...register("messageContact")}
                onChange={handleInputChange}
                name="messageContact"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-red-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring w-full"
            >
              <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
              <span className="block border border-red-600 bg-red-600 px-6 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex justify-center items-center gap-4">
                <span className="sm:block md:hidden lg:block">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </>
      )}{" "}
    </>
  );
};

export default ContactForm;
