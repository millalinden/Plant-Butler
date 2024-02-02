import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import "./Components/Navbar/Navbar.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PlantDetective from "./Pages/PlantDetective/PlantDetective";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const location = useLocation();

  // Now the Navbar will only be rendered if the current route is not the landing page
  const renderNavbar = location.pathname !== "/";

  return (
    <div className="app-container">
      <ShopContextProvider>
        <Router>
          {renderNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/PlantDetective" element={<PlantDetective />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
