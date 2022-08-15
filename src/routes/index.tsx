import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import ProfileViewAdmin from "../pages/ProfileViewAdmin";
import Register from "../pages/Register";
import VehicleDetails from "../pages/VehicleDetails";
import { Route, Routes } from "react-router-dom";
import FilterAd from "../pages/FilterAds";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile_admin" element={<ProfileViewAdmin />} />
      <Route path="/vehicle/:id" element={<VehicleDetails />} />
      <Route path="/ads/filter/:type" element={<FilterAd />} />
    </Routes>
  );
};

export default Router;
