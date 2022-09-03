import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./containers/LoginPage";
import { SignUpPage } from "./containers/SignUpPage";
import { DashboardPage } from "./containers/DashboardPage";
import { useAuth } from "./context/AppProvider";

export const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route path="/dashboard" element={<DashboardPage />} />
        </>
      )}
    </Routes>
  );
};
