import React from "react";
import { Navigate, Route, Routes } from "react-router";
import MainLayout from "../layouts/main/MainLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Navigate to={"/dashboard"} />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="clients"
            element={<div className="text-2xl">Clients</div>}
          />
          <Route
            path="revenues"
            element={<div className="text-2xl">Revenues</div>}
          />
          <Route
            path="settings"
            element={<div className="text-2xl">Settings</div>}
          />
          <Route path="*" element={<div className="text-2xl">Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
