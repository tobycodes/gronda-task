import React, { useReducer } from "react";

import Filter from "../../components/Filter/Filter";
import StatBoard from "../../components/StatBoard/StatBoard";
import Table from "../Table/Table";

import { getCompanyList } from "../../helpers/helper-functions";

import { filterReducer, sortReducer } from "../../helpers/reducers";

const StatPage = () => {
	const [statData, updateStatData] = useReducer(filterReducer, {});
	const [companyListData, updateCompanyListData] = useReducer(
		sortReducer,
		getCompanyList()
	);

	//N.B we can actually pass sortCompanyList prop through a Context Provider or other patterns, because <Table /> component also passes it to the <Sort /> component inside it.
	//But for simplicity and also since we are simply passing it twice and not using it anywhere else, I've decided to keep it this way.
	return (
		<div className="stat-page">
			<Filter filterStatData={updateStatData} />
			<StatBoard statData={statData} />
			<Table
				companyList={companyListData}
				sortCompanyList={updateCompanyListData}
			/>
		</div>
	);
};

export default StatPage;
