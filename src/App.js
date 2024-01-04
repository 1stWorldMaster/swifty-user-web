import "./App.css";
import Login from "./pages/login_page";
import RestaurantScreen from "./pages/restaurantPage";
import SignUp from "./pages/signup_page";
import res1 from "./sampleData/restaurantData";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar cartItemsCountProp={3}/>
      <Routes>
        <Route path="/" element={<RestaurantScreen restaurant={res1} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
