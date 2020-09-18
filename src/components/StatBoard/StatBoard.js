import React, { useEffect, useState } from "react";

import StatCard from "../StatCard/StatCard";

import colors from "../../constants/colors";
import asyncData from "../../data/data";

const StatBoard = () => {
	const [statData, setStatData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		//The way this usually works is obvious. There's an initial call to the API to fetch our data.
		//This can happen here or, most likely, we'd dispatch a redux action (e.g. props.loadStatData()) that gets picked up by Thunk or Saga and does the fetch for us (via Axios or the Fetch API)
		//Props.loadStatData will come from connecting our component to redux of course. What we'd naturally then do is just get our data from redux (passed as props) and use it in our component.

		//But for demonstration purposes, we'd import our JSON data from inside our project and use it in our app.
		const fetchData = () => {
			if (asyncData.status === "ok") {
				const result = asyncData.data;

				setStatData(result);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const { active_source, weekly_active, nps } = statData;

	return isLoading ? (
		<h3>Loading...</h3>
	) : (
		<div className="stat-board">
			<StatCard
				statTitle="Active sourcing"
				currentPeriod={active_source.current_period}
				lastPeriod={active_source.last_period}
				bgColors={colors[0]}
			/>
			<StatCard
				statTitle="Weekly active"
				currentPeriod={weekly_active.current_period}
				lastPeriod={weekly_active.last_period}
				bgColors={colors[1]}
			/>
			<StatCard
				statTitle="NPS"
				currentPeriod={nps.current_period}
				lastPeriod={nps.last_period}
				bgColors={colors[2]}
			/>
		</div>
	);
};

export default StatBoard;
