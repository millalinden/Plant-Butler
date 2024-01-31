import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/Navbar/Navbar.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App-container">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/CartPage" />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
