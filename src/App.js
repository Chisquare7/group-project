import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PartnersPage from "../src/pages/PartnersPage";

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<PartnersPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
