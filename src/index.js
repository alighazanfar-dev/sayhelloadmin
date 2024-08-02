import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "./utils/toast";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>

);
