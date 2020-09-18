import React, { useCallback } from "react";

import Dropdown from "../Dropdown/Dropdown";

import sortOptions from "../../constants/sort-options";

const Sort = ({ sortTableData }) => {
	const handleSort = useCallback(
		(sortOption) => {
			const action = {
				type: sortOption.sortType,
			};

			sortTableData(action);
		},
		[sortTableData]
	);

	return (
		<div className="sort">
			<Dropdown label="Sort by" options={sortOptions} onChange={handleSort} />
		</div>
	);
};

export default Sort;
