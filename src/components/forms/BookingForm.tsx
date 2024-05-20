import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Loader from "../Loader";
import Success from "./Success";
import Error from "./Error";
import axios from "axios";
import PlacesAutocomplete from "./PlacesInput";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    phone: yup.number().required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    pickUpAdress: yup
      .object({
        lat: yup.number().required("Latitude is required"),
        lng: yup.number().required("Longitude is required"),
        name: yup.string().required("Pick up address is required"),
      })
      .required(),
    dropOffAdress: yup
      .object({
        lat: yup.number().required("Latitude is required"),
        lng: yup.number().required("Longitude is required"),
        name: yup.string().required("Drop off address is required"),
      })
      .required(),
    date: yup.string().required("Date is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

type FormData = {
  name: string;
  surname: string;
  phone: number;
  email: string;
  pickUpAdress: { lat: number | null; lng: number | null; name: string | null };
  dropOffAdress: {
    lat: number | null;
    lng: number | null;
    name: string | null;
  };
  date: string;
  message: string;
};

type PlaceSelection = {
  lat: number;
  lng: number;
  value: string;
};

function BookingForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);
  };

  useEffect(() => {
    const dateInput = dateInputRef.current;
    if (dateInput) {
      dateInput.addEventListener("focus", () => dateInput.showPicker());
    }
    return () => {
      if (dateInput) {
        dateInput.removeEventListener("focus", () => dateInput.showPicker());
      }
    };
  }, []);

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
      {error ? <Error /> : null}
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
          <form
            onSubmit={onSubmit}
            className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                onChange={handleInputChange}
                name="name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Surname
              </label>
              <input
                id="surname"
                {...register("surname")}
                onChange={handleInputChange}
                name="surname"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Phone
              </label>
              <input
                id="phone"
                {...register("phone")}
                onChange={handleInputChange}
                name="phone"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                onChange={handleInputChange}
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pickUpAdress"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Pick Up Adress
              </label>
              {/* <input
                id="pickUpAdress"
                {...register("pickUpAdress")}
                onChange={handleInputChange}
                name="pickUpAdress"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              /> */}
              <PlacesAutocomplete
                id="pickUpAdress"
                {...register("pickUpAdress.name")}
                onSelect={({ lat, lng, value }: PlaceSelection) => {
                  setValue("pickUpAdress.lat", lat);
                  setValue("pickUpAdress.lng", lng);
                  setValue("pickUpAdress.name", value);
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="dropOffAdress"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Drop Off Adress
              </label>
              {/* <input
                id="dropOffAdress"
                {...register("dropOffAdress")}
                onChange={handleInputChange}
                name="dropOffAdress"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              /> */}
              <PlacesAutocomplete
                id="dropOffAdress"
                {...register("dropOffAdress.name")}
                onSelect={({ lat, lng, value }: PlaceSelection) => {
                  setValue("dropOffAdress.lat", lat);
                  setValue("dropOffAdress.lng", lng);
                  setValue("dropOffAdress.name", value);
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="date"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                {...register("date")}
                onChange={handleInputChange}
                name="date"
                ref={dateInputRef}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                onChange={handleInputChange}
                name="message"
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center flex-col justify-between sm:col-span-2">
              <button
                type="submit"
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring w-full"
              >
                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                <span className="block border border-red-600 bg-red-600 px-6 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex justify-center items-center gap-4">
                  <span className="sm:block md:hidden lg:block">
                    Send Request
                  </span>
                </span>
              </button>
              <p className="text-xs text-gray-500 mt-3">
                *all fields are required
              </p>
            </div>
          </form>
        </>
      )}{" "}
    </>
  );
}

export default BookingForm;
