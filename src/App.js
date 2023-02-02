import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Pages/Checkout/Checkout";
import Register from "./components/Pages/Login & Rename/Register";
import Login from "./components/Pages/Login & Rename/Login";
import ProductMap from "./components/Pages/Products/ProductMap";
import Products from "./components/Pages/Products/Products";
import Footer from "./components/Static-components/Footer/Footer";
import GoToTop from "./components/Static-components/GoToTop/GoToTop";
import Navbar from "./components/Static-components/Navbar/Navbar";
import NavbarSecond from "./components/Static-components/Navbar/SecondNavbar/NavbarSecond";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Fragment>
                <Login />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/productcheckout"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <ProductMap />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/register"
            element={
              <Fragment>
                <Register />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Navbar />
                <NavbarSecond />
                <Checkout />
                <Footer />
                <GoToTop />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/products"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <Products />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <Home />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
