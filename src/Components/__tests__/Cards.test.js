import React from "react";
import Cards from "../Cards";
import { shallow, mount, render } from 'enzyme';

test("render <Cards /> component", () => {
    const wrapper = shallow(<Cards />);
});
