import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Nav from "./components/Nav";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const buyProduct = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      const newCartItem = [...cartItems, product];
      setCartItems(newCartItem);
    }
  };
  return (
    <div className="App">
      <Nav
        products={products}
        setProducts={setProducts}
        cartItems={cartItems}
      />
      <Header products={products} />
      <Content />
      <Cart />
      <Products
        products={products}
        setProducts={setProducts}
        cartItems={cartItems}
        setCartItems={setCartItems}
        buyProduct={buyProduct}
      />
    </div>
  );
}

export default App;
