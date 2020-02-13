import React from "react";
import Card from "..";
import Details from "../Details";

import { shallow, mount, render } from 'enzyme';

test("render <Details /> component", () => {
    const wrapper = shallow(<Details />);
});

test("render <Details /> component", () => {
    const details = { author: "Ivan", date: "2020/01/20" }
    const wrapper = shallow(<Details details={details} />);
    expect(wrapper.contains(<small className="text-muted card-date">2020/01/20</small>)).toEqual(true);
});