import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

// Auth
import Login from "../pages/auth/Login";

// Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Investments from "../pages/investments/Investments";
import ReferralTree from "../pages/referrals/ReferralTree";
import Wallet from "../pages/wallet/Wallet";
import Profile from "../pages/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route path="investments" element={<Investments />} />

        <Route path="referrals" element={<ReferralTree />} />

        <Route path="wallet" element={<Wallet />} />

        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
