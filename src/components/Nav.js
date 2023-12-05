import React, { useEffect, useState } from "react";
import VexaLogo from "../assets/Vexa-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

function Nav({ products, setProducts, cartItems, setCartItems }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="flex md:block" id="header">
        <nav className="m-auto md:flex justify-between font-serif font-semibold text-lg  md:h-14">
          <div>
            <img className="w-52 md:w-28" src={VexaLogo} alt="" />
          </div>
          <div className="md:mt-4 text-xl hidden md:block">
            <ul className="md:flex text-center">
              <li className="mb-2 md:me-5 hover:cursor-pointer">Home</li>
              <li className="mb-2 md:me-5 hover:cursor-pointer">About</li>
              <li className="mb-2 hover:cursor-pointer">Products</li>
              <div className="">
                <FaCartShopping className="w-8 h-8 md:me-20 md:ms-96 hover:cursor-pointer" />
                <p
                  className={`relative bottom-9 left-[400px] text-xs text-white  ${
                    cartItems && cartItems.length
                      ? "w-5 h-5 rounded-full bg-red-600"
                      : "hidden"
                  }`}
                >
                  {cartItems && cartItems.length}
                </p>
              </div>
            </ul>
          </div>
          <div className={`md:hidden ${showMenu ? "" : "hidden"}`}>
            <ul className="text-center">
              <li className="mb-2 md:me-5 hover:cursor-pointer">Home</li>
              <li className="mb-2 md:me-5 hover:cursor-pointer">About</li>
              <li className="mb-2 hover:cursor-pointer">Products</li>
              <div className="grid justify-center">
                <FaCartShopping className="w-8 h-8 md:me-20 md:ms-96 hover:cursor-pointer" />
                <p
                  className={`relative bottom-9 left-7  text-xs text-white  ${
                    cartItems && cartItems.length
                      ? "w-5 h-5 rounded-full bg-red-600"
                      : "hidden"
                  }`}
                >
                  {cartItems && cartItems.length}
                </p>
              </div>
            </ul>
          </div>
        </nav>
        <div>
          {showMenu ? (
            <TfiClose
              className="w-10 h-10 me-2 mt-2 md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <div>
              <FiMenu
                className="w-10 h-10 me-2 mt-2 md:hidden"
                onClick={toggleMenu}
              />
              <p
                className={`relative bottom-9 left-7 sm:hidden ${
                  cartItems && cartItems.length
                    ? "w-3 h-3 rounded-full bg-red-600"
                    : "hidden"
                }`}
              ></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
