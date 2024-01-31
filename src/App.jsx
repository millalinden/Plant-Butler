import "./App.css";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/CartPage">
            <CartPage />{" "}
          </Route>
          <Route exact path="/CheckoutPage">
            <CheckoutPage />
          </Route>
          <Route exact path="/Footer">
            <Footer />{" "}
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
