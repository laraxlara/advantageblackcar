import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/car.png";
import { navbarLinks, dropdownNavs } from "@/components/navbar/NavbarLinks";
import PhoneButton from "../buttons/PhoneButton";

type Props = {};

const Navbar = (props: Props) => {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
  });

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (!target?.closest(".nav-menu")) setDrapdownState({ isActive: false });
    };
  }, []);

  return (
    <nav
      className={`relative fixed top-0 z-20 bg-black shadow-xl w-full md:static md:text-sm md:border-none rounded-xl w-full ${
        state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
      }`}
    >
      <div className="items-center gap-x-14 px-4 max-w-screen-2xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src={logo} width={100} height={20} alt="Float UI logo" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-200"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`nav-menu z-20 flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navbarLinks.map((item) => {
              return (
                <li key={item.id}>
                  {item.isDropdown ? (
                    <button
                      className="w-full flex items-center justify-between gap-1 text-gray-300 hover:text-red-200"
                      onClick={() =>
                        setDrapdownState({
                          isActive: !drapdownState.isActive,
                        })
                      }
                    >
                      {item.title}
                      {drapdownState.isActive ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.url}
                      className="block text-gray-300 hover:text-red-200"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.isDropdown && drapdownState.isActive ? (
                    <div className="mt-6 bg-black inset-x-0 top-20 md:absolute md:shadow-md md:mt-0 rounded-b-xl">
                      <ul className="max-w-screen-2xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                        {dropdownNavs.map((dropdownItem) => (
                          <li key={dropdownItem.id}>
                            <Link
                              href={dropdownItem.url}
                              onClick={() =>
                                setDrapdownState({ isActive: false })
                              }
                              className="flex gap-3 items-center"
                            >
                              <div className="w-12 h-12 rounded-full bg-[#3b3b3b] text-red-200 flex items-center justify-center duration-150 group-hover:bg-red-200 group-hover:text-white md:w-14 md:h-14">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-car"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-gray-200 duration-200 group-hover:text-red-200 text-sm font-medium md:text-base">
                                  {dropdownItem.title}
                                </span>
                                <p className="text-sm text-gray-400 group-hover:text-gray-200 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}

            <div className="flex-1 items-center justify-end gap-x-2 space-y-3 md:flex md:space-y-0">
              <li>
                <PhoneButton />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
