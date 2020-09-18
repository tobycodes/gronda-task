import React from "react";
import Sort from "../Sort/Sort";

const contracts = ["Weekly", "Monthly", "Quarterly", "Yearly", "Seasonal"];

const Table = ({ companyList, sortCompanyList }) => {
	return (
		<>
			<div className="sort-box">
				<div className="critical-box">
					<input
						name="critical"
						id="critical"
						type="checkbox"
						className="critical-checkbox"
					/>
					<label htmlFor="critical" className="critical-label">
						Show critical
					</label>
				</div>

				<Sort sortTableData={sortCompanyList} />
			</div>

			<div className="table-wrapper">
				<table className="table">
					<thead>
						<tr className="table-row">
							<th className="table-col fixed">Id</th>
							<th className="table-col fixed">Company name</th>
							<th className="table-col">Segment</th>
							<th className="table-col">Contract</th>
							<th className="table-col">Renewals</th>
							<th className="table-col">NPS avg</th>
							<th className="table-col">NPS last</th>
							<th className="table-col">NPS first</th>
						</tr>
					</thead>

					{/*Usually from here, we'd have fetched all of our company data as a list, and then render the rest of the table with JavaScript map function */}
					<tbody>
						{companyList.map((company) => (
							<tr key={company.id} className="table-row">
								<td className="table-col fixed">{company.id}</td>
								<td className="table-col fixed">{company.name}</td>
								<td className="table-col">{company.segment}</td>
								<td className="table-col">{contracts[company.contract]}</td>
								<td className="table-col">{company.renewals}</td>
								<td className="table-col">{company.npsAvg}</td>
								<td className="table-col">{company.npsLast}</td>
								<td className="table-col">{company.npsFirst}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
