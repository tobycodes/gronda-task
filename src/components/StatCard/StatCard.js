import React from "react";

const StatCard = ({
	statTitle,
	currentPeriod,
	lastPeriod,
	backgroundColors,
}) => {
	return (
		<div
			className="card"
			style={{
				backgroundImage: `linear-gradient(to right, ${backgroundColors?.left}, ${backgroundColors?.right})`,
			}}
		>
			<span>{statTitle}</span>
			<span className="card-value">{currentPeriod}</span>
			<span>{`${lastPeriod} Last period`}</span>
		</div>
	);
};

export default StatCard;
