import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import "./Components/Navbar/Navbar.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PlantDetective from "./Pages/PlantDetective/PlantDetective";

function App() {
  return (
    <div className="App-container">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/"/> */}
            <Route path="/Shop" element={<Shop />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/LandingPage"element={<LandingPage />} />
            <Route path="/PlantDetective" element={<PlantDetective/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
