import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart.jsx";
import Home from "./components/pages/Home.jsx";
import Mainlayout from "./components/common/Mainlayout.jsx";
import Dashboardlayout from "./components/common/Dashboardlayout.jsx";
import Employee from "./components/Dashboard/Employee/Employee.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/cart"} element={<Cart />}></Route>
          </Route>

          <Route element={<Dashboardlayout />}>
            <Route path="/dashboard" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
