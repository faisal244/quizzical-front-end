import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./containers/LoginPage";
import { SignUpPage } from "./containers/SignUpPage";
import { CreateQuizPage } from "./containers/CreateQuizPage";
import { Introduction } from "./containers/Introduction";
import Hero from "components/hero/FullWidthWithImage";
import { useAuth } from "./context/AppProvider";
import { Homepage } from "./containers/Homepage";
import { ViewAllQuizzes } from "./containers/ViewAllQuizzesPage";
import { Footer } from "components/footers/MiniCenteredFooter";
import { default as ViewSingleQuizPage } from "containers/ViewSingleQuiz";

export const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<ViewAllQuizzes />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<ViewAllQuizzes />} />
          <Route path="/create-quiz" element={<CreateQuizPage />} />
          <Route path="/quiz/:id" element={<ViewSingleQuizPage />} />
        </>
      )}
    </Routes>
  );
};
