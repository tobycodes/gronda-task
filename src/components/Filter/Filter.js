import React, { useCallback } from "react";

import filterOptions from "../../constants/filter-options";
import Dropdown from "../Dropdown/Dropdown";

const Filter = ({ filterStatData }) => {
	const handleFilter = useCallback(
		(filterOption) => {
			//In the Dropdown component, any function passed as the onChange prop gets the currently selected option as parameter
			//Under normal circumstances, we will import our FILTER action function from redux and dispatch this action here using the filterOption as payload.
			//But for demonstration purposes of this app, we have passed a custom dispatch prop for this purpose.

			const action = {
				type: filterOption.time_unit,
				payload: filterOption.time_unit_count,
			};

			filterStatData(action);
		},
		[filterStatData]
	);

	return (
		<div className="filter">
			<Dropdown
				label="Filter by"
				options={filterOptions}
				onChange={(option) => handleFilter(option)}
			/>
		</div>
	);
};

export default Filter;
