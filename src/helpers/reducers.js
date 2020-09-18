import statData from "../data/stat-data";

export const filterReducer = (state, action) => {
	switch (action.type) {
		case "MONTH":
			//The value of action.payload is either 1 or 0.
			return action.payload ? statData.lastMonth : statData.thisMonth;
		case "QUARTER":
			return action.payload ? statData.lastQuarter : statData.thisQuarter;

		case "YEAR":
			return action.payload ? statData.lastYear : statData.thisYear;

		default:
			return state;
	}
};

export const sortReducer = (state, action) => {
	switch (action.type) {
		case "ID":
			return [...state].sort((a, b) => a.id - b.id);
		case "COMPANY_NAME":
			return [...state].sort((a, b) => a.name.localeCompare(b.name));
		case "SEGMENT":
			return [...state].sort((a, b) => a.segment.localeCompare(b.segment));
		case "CONTRACT":
			return [...state].sort((a, b) => a.contract - b.contract);
		case "BEST_NPS_AVG":
			return [...state].sort((a, b) => b.npsAvg - a.npsAvg);
		case "WORST_NPS_AVG":
			return [...state].sort((a, b) => a.npsAvg - b.npsAvg);
		case "NPS_LAST":
			return [...state].sort((a, b) => a.npsLast - b.npsLast);
		case "NPS_FIRST":
			return [...state].sort((a, b) => a.npsFirst - b.npsFirst);
		default:
			return state;
	}
};
