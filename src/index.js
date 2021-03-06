
/**
 * Index file
 *
 * @version 1.0.0
 * @author ashane2e
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Creditcard from "./pages/CreditCardTest";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<App />} />
      <Route path="/creditcard" element={<Creditcard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
