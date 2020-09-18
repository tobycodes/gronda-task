import React from "react";

import Dropdown from "../Dropdown/Dropdown";

import sortOptions from "../../constants/sort-options";

const Sort = (props) => {
	const handleSort = (sortOption) => {
		//Handle Sort here
	};

	return (
		<div className="sort">
			<Dropdown label="Sort by" options={sortOptions} onChange={handleSort} />
		</div>
	);
};

export default Sort;
