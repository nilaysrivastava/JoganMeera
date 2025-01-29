import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import Cart from "./screens/Cart";
import MyOrders from "./screens/MyOrders";
import CategoryItems from "./components/CategoryItems";
import Poshaak from "./screens/Poshaak";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/terms" element={<TermsAndConditions />} />
            <Route exact path="/privacy" element={<PrivacyPolicy />} />
            <Route exact path="/myOrders" element={<MyOrders />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:id" element={<CategoryItems />} />
            <Route exact path="/poshaak" element={<Poshaak />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
