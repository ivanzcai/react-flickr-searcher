import React from "react";
import Search from "../Search";
import { shallow, mount, render } from 'enzyme';

test("render <Search /> component", () => {
    const wrapper = shallow(<Search />);
});
