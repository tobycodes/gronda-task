import React from "react";

import Filter from "../../components/Filter/Filter";
import StatBoard from "../../components/StatBoard/StatBoard";
import Table from "../Table/Table";

const StatPage = () => {
	return (
		<div className="stat-page">
			<Filter />
			<StatBoard />
			<Table />
		</div>
	);
};

export default StatPage;
