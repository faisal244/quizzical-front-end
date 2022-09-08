import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./containers/LoginPage";
import { SignUpPage } from "./containers/SignUpPage";
import { DashboardPage } from "./containers/DashboardPage";
import { ViewQuizPage } from "./containers/ViewQuizPage";
import { CreateQuizPage } from "./containers/CreateQuizPage";
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

      <Route path="/viewquizpage" element={<ViewQuizPage />} />
      <Route path="/createquizpage" element={<CreateQuizPage />} />
    </Routes>
  );
};
