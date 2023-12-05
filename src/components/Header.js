import React, { useState } from "react";

import { Carousel } from "./Carousel";
import Content from "./Content";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header({ products, cartItems }) {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className=" mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-6/6 mb-10 md:mb-0">
            <Carousel />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Welcome to Vexa ...Essence Unveils Elegance
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Embark on a journey of unparalleled style. Welcome to Vexa, where
              individuality meets sophistication in every click. At Vexa, we
              believe that true style speaks volumes about who you are.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
