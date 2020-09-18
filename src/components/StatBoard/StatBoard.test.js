import React from "react";
import { shallow } from "enzyme";

import StatBoard from "./StatBoard";

describe("<StatBoard />", () => {
	it("renders a StatBoard component", () => {
		expect(shallow(<StatBoard />)).toMatchSnapshot();
	});
});
