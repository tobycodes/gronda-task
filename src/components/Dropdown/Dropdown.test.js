import React from "react";
import { shallow } from "enzyme";

import Dropdown from "./Dropdown";

const props = {
	label: "Filter by",
	options: [
		{
			id: 1,
			title: "This month",
			time_unit: "MONTH",
			time_unit_count: 0,
		},
	],
	onChange: jest.fn(() => {}),
};

describe("<Dropdown />", () => {
	it("expect to render a Dropdown component", () => {
		expect(shallow(<Dropdown {...props} />)).toMatchSnapshot();
	});

	it("expect to render a button and a list", () => {
		const wrapper = shallow(<Dropdown {...props} />);

		expect(wrapper.find('input[type="button"]').length).toEqual(1);
		expect(wrapper.find("ul>li").length).toBeGreaterThanOrEqual(1);
	});

	it("correctly toggle the dropdown open or close", () => {
		const wrapper = shallow(<Dropdown {...props} />);

		//Simulate first click on button to open the dropdown.
		wrapper.find('input[type="button"]').simulate("click");
		expect(wrapper.find("#dropdown-list").props()).toHaveProperty(
			"className",
			"dropdown-list show"
		);

		//Simulate second click to close the dropdown.
		wrapper.find('input[type="button"]').simulate("click");
		expect(wrapper.find("#dropdown-list").props()).toHaveProperty(
			"className",
			"dropdown-list"
		);
	});
});
