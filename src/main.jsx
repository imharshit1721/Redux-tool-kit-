import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart.jsx";
import Home from "./components/pages/Home.jsx";
import Mainlayout from "./components/common/Mainlayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
