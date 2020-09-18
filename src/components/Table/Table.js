import React from "react";
import Sort from "../Sort/Sort";

const Table = (props) => {
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

				<Sort />
			</div>

			<table className="table">
				<thead>
					<tr className="table-row">
						<th className="table-col">Id</th>
						<th className="table-col">Company name</th>
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
					<tr className="table-row">
						<td className="table-col">
							<div></div>
						</td>
						<td className="table-col">Gronda GmbH</td>
						<td className="table-col">A</td>
						<td className="table-col">XYZ</td>
						<td className="table-col">...</td>
						<td className="table-col">...</td>
						<td className="table-col">...</td>
						<td className="table-col">...</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Table;
