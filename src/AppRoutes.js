import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./containers/LoginPage";
import { SignUpPage } from "./containers/SignUpPage";
import { DashboardPage } from "./containers/DashboardPage";
import { CreateQuizPage } from "./containers/CreateQuizPage";
import { Introduction } from "./containers/Introduction";
import Hero from "components/hero/FullWidthWithImage";
import { useAuth } from "./context/AppProvider";
import { Homepage } from "./containers/Homepage";
import { Footer } from "components/footers/MiniCenteredFooter";

export const AppRoutes = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Routes>
			{!isLoggedIn && (
				<>
					<Route
						path="/"
						element={<Homepage />}
					/>
					<Route
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						path="/sign-up"
						element={<SignUpPage />}
					/>
				</>
			)}

			{isLoggedIn && (
				<>
					<Route
						path="/"
						element={<Homepage />}
					/>
					<Route
						path="/introduction"
						element={<Introduction />}
					/>
					{/* <Route
						path="/dashboard"
						element={<DashboardPage />}
					/> */}
					<Route
						path="/create-quiz"
						element={<CreateQuizPage />}
					/>
				</>
			)}
		</Routes>
	);
};
