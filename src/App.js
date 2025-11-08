import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

import Dashboard from "./pages/Dashboard";
import AllUsers from "./pages/AllUsers";
import UserProfile from "./pages/UserProfile";
import Campaigns from "./pages/Campaigns";
import CampaignDetails from "./pages/CampaignDetails.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaign/:campaignName" element={<CampaignDetails />} />



      </Routes>
    </Router>
  );
}

export default App;
