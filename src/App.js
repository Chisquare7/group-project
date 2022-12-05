import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PressPage from "../src/pages/PressPage";
// import PressArticle from "../src/pages/PressArticle";
import PasswordResetSuccessful from "../src/pages/PasswordResetSuccessful";

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					{/* <Route path="/" element={<PressPage />} />
					<Route path="/PressArticle" element={<PressArticle />} /> */}
					<Route path="/pw-reset-success" element={<PasswordResetSuccessful />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
