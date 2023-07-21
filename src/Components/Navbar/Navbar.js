/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const reduxStateData = useSelector((state) => state.ProductData.products);
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    if (reduxStateData !== null) {
      reduxStateData.map((item) => {
        count = count + item.count;
      });
    }
    setCartCount(count);
  }, [reduxStateData]);
  return (
    <div>
      <nav class="bg-gray-800 w-screen border-2 border-lightbrown shadow-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div class="flex items-center justify-center h-16">
            <div class="flex items-center">
              <Link to="/">
                <div class="flex-shrink-0 flex flex-row gap-2 align-middle">
                  <img src="./Images/bakery.jpeg" class="h-8 w-8" alt="Logo" />
                  <h1 class="text-3xl italic font-sans text-brown mr-4 sm:text-4xl">
                  BAKE BROTHERS 
                  </h1>
                </div>
              </Link>

              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4"> 
                  <Link to="/cart">
                    <span class="relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red rounded-full">
                        {cartCount}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div class="-mr-2 flex border-2 border-lightbrown rounded-lg md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                class="cursor-pointer bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#333333"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#333333"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div class="md:hidden" id="mobile-menu">
              <div ref={ref} class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/cart"
                  class="text-gray-300  block px-3 py-2 rounded-md text-base font-medium"
                >
                  <span class="relative inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red rounded-full">
                      {cartCount}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
