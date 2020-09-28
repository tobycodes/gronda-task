import statData from "../data/stat-data";

export const filterReducer = (state, action) => {
	switch (action.type) {
		case "FILTER_BY_MONTH":
			//The value of action.payload is either 1 or 0.
			return action.payload ? statData.lastMonth : statData.thisMonth;
		case "FILTER_BY_QUARTER":
			return action.payload ? statData.lastQuarter : statData.thisQuarter;

		case "FILTER_BY_YEAR":
			return action.payload ? statData.lastYear : statData.thisYear;

		default:
			return state;
	}
};

export const sortReducer = (state, action) => {
	switch (action.type) {
		case "SORT_BY_ID":
			return [...state].sort((a, b) => a.id - b.id);
		case "SORT_BY_COMPANY_NAME":
			return [...state].sort((a, b) => a.name.localeCompare(b.name));
		case "SORT_BY_SEGMENT":
			return [...state].sort((a, b) => a.segment.localeCompare(b.segment));
		case "SORT_BY_CONTRACT":
			return [...state].sort((a, b) => a.contract - b.contract);
		case "SORT_BY_BEST_NPS_AVG":
			return [...state].sort((a, b) => b.npsAvg - a.npsAvg);
		case "SORT_BY_WORST_NPS_AVG":
			return [...state].sort((a, b) => a.npsAvg - b.npsAvg);
		case "SORT_BY_NPS_LAST":
			return [...state].sort((a, b) => a.npsLast - b.npsLast);
		case "SORT_BY_NPS_FIRST":
			return [...state].sort((a, b) => a.npsFirst - b.npsFirst);
		default:
			return state;
	}
};
