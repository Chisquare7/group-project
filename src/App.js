import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PressPage from "../src/pages/PressPage";
// import PressArticle from "../src/pages/PressArticle";
import ForgotPasswordNew from "./pages/ForgotPasswordNew/Index";
import CheckMail from "../src/pages/CheckMail";
import SetNewPassword from "../src/pages/SetNewPassword";
import PasswordResetSuccessful from "../src/pages/PasswordResetSuccessful";

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					{/* <Route path="/" element={<PressPage />} />
					<Route path="/PressArticle" element={<PressArticle />} /> */}
					<Route path="/forgot-password" element={<ForgotPasswordNew />} />
					<Route path="/check-mail" element={<CheckMail />} />
					<Route path="/set-new-password" element={<SetNewPassword />} />
					<Route path="/reset-success" element={<PasswordResetSuccessful />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
