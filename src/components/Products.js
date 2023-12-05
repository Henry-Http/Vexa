import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Products({
  products,
  setProducts,
  cartItems,
  setCartItems,
  buyProduct,
  
}) {
 
  return (
    <div>
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className="container">
            <div className="" id="cont">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="w-full h-full block"
                    src={product.thumbnail}
                  ></img>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
                <div>
                  <button
                    onClick={() => buyProduct(product)}
                    className="bg-purple-500 text-white py-2 px-4 rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
      <div className="hidden">
        <Cart />
      </div>
    </div>
  );
}

export default Products;
