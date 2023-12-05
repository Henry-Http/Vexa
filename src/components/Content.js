import React from "react";
import curatingExcellence from "../assets/curatingExcellence.jpg";
import EffortlessElegance from "../assets/EffortlessElegance2.png";
import WorldlyRefinement from "../assets/WorldlyRefinement.jpg";

function Content() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Elevate Your Experience
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Vexa isn't just about shopping; it's a celebration of
                self-discovery, an homage to innovation, and an invitation to be
                part of a community that revels in uniqueness.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={curatingExcellence}
                ></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                ✨ Curated Excellence
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Embrace the extraordinary with our thoughtfully selected array
                of the latest trends.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Discover Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-center h-full w-full"
                  src={EffortlessElegance}
                ></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                🛍️ Effortless Elegance
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Seamless shopping, secure transactions—experience the epitome of
                sophistication, Let your elegance shine.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Discover Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={WorldlyRefinement}
                ></img>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                🌐 Worldly Refinement
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Connect with a global community that shares your passion for
                distinction and embraces the allure of individuality.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Discover Now{" "}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
