import "./App.css";
import Login from "./pages/login_page";
import RestaurantScreen from "./pages/restaurantPage";
import SignUp from "./pages/signup_page";
import res1 from "./sampleData/restaurantData";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import MainScreen from "./pages/mainPage";
import Checkout from "./pages/checkout";
import Verify from "./pages/verify_otp";

function App() {
  return (
    <BrowserRouter>
      <Navbar cartItemsCountProp={3} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<MainScreen />} />
        <Route path="/restaurant" element={<RestaurantScreen />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
