import React from "react";
import "./App.css";
import StatBoard from "./components/StatBoard/StatBoard";
import Table from "./components/Table/Table";

function App() {
	return (
		<div className="stat-page">
			<StatBoard />
			<Table />
		</div>
	);
}

export default App;
