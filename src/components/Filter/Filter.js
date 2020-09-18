import React from "react";

import filterOptions from "../../constants/filter-options";
import Dropdown from "../Dropdown/Dropdown";

const Filter = (props) => {
	const handleFilter = (filterOption) => {
		//In the Dropdown component, any function passed as the onChange prop gets the currently selected option as parameter

		const { time_unit, time_unit_count } = filterOption;

		//Under normal circumstances, we will import our FILTER action function from redux and dispatch this action here using the filterOption as payload.
		//But this is just a skeleton, so we can console.log what the action will look like just to see if it works.
		const action = { type: "FILTER", payload: { time_unit, time_unit_count } };

		console.log(action);
	};

	return (
		<div className="filter">
			<Dropdown
				label="Filter by"
				options={filterOptions}
				onChange={handleFilter}
			/>
		</div>
	);
};

export default Filter;
