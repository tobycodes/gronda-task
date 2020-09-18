import React from "react";

import StatCard from "../StatCard/StatCard";

import colors from "../../constants/colors";

const StatBoard = (props) => {
	const { active_source, weekly_active, nps } = props.statData;

	return (
		<div id="stat-board" className="stat-board">
			<StatCard
				statTitle="Active sourcing"
				currentPeriod={active_source?.current_period}
				lastPeriod={active_source?.last_period}
				bgColors={colors[0]}
			/>
			<StatCard
				statTitle="Weekly active"
				currentPeriod={weekly_active?.current_period}
				lastPeriod={weekly_active?.last_period}
				bgColors={colors[1]}
			/>
			<StatCard
				statTitle="NPS"
				currentPeriod={nps?.current_period}
				lastPeriod={nps?.last_period}
				bgColors={colors[2]}
			/>
		</div>
	);
};

export default StatBoard;
