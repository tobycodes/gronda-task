import companyData from "../data/company-data";
import Company from "../models/company";

export const getCompanyList = () => {
	const companyList = companyData.map(
		(company) =>
			new Company(
				company.id,
				company.name,
				company.segment,
				company.contract,
				company.renewals,
				company.npsAvg,
				company.npsLast,
				company.npsFirst
			)
	);

	return companyList;
};
