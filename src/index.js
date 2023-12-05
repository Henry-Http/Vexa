import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: ,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />{" "}
  </React.StrictMode>
);
