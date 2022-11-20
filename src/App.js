import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PressPage from "../src/pages/PressPage";
import PressArticle from "../src/pages/PressArticle";

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<PressPage />} />
					<Route path="/PressArticle" element={<PressArticle />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
