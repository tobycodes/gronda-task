import React from "react";

const StatCard = ({ statTitle, currentPeriod, lastPeriod, bgColors }) => {
	return (
		<div
			className="card"
			style={{
				backgroundImage: `linear-gradient(to right, ${bgColors?.first}, ${bgColors?.second})`,
			}}
		>
			<span className="card__sub">{statTitle}</span>
			<span className="card__value">{currentPeriod}</span>
			<span className="card__sub">{`${lastPeriod} Last period`}</span>
		</div>
	);
};

export default StatCard;
