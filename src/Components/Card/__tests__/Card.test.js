import React from "react";
import Card from "../";
import { shallow, mount, render } from 'enzyme';

test("render <Card /> component", () => {
    const wrapper = shallow(<Card />);
});
