import React from "react";
import { shallow, mount } from "enzyme";

import StatCard from "./StatCard";

const props = {
	currentPeriod: 45,
	lastPeriod: 30,
	bgColor: { first: "#F5C099", second: "#F29E98" },
};

describe("<StatCard />", () => {
	it("expects to render a StatCard component", () => {
		expect(shallow(<StatCard {...props} />)).toMatchSnapshot();
	});

	it("expects to render 3 span elements", () => {
		const wrapper = shallow(<StatCard {...props} />);

		expect(wrapper.find("span").length).toEqual(3);
	});

	it("expects to receive correct stat data and background color props", () => {
		const wrapper = mount(<StatCard {...props} />);

		expect(wrapper.props().currentPeriod).toEqual(45);
		expect(wrapper.props().lastPeriod).toEqual(30);
		expect(wrapper.props().bgColor).toMatchObject(props.bgColor);
	});
});
