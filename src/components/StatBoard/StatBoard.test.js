import React from "react";
import { shallow } from "enzyme";

import StatBoard from "./StatBoard";
import StatCard from "../StatCard/StatCard";

describe("<StatBoard />", () => {
	it("renders a StatBoard component", () => {
		expect(shallow(<StatBoard />)).toMatchSnapshot();
	});

	it("renders one or more StatCard component", () => {
		const wrapper = shallow(<StatBoard />);

		expect(wrapper.containsMatchingElement(StatCard)).toBeTruthy();
	});
});
