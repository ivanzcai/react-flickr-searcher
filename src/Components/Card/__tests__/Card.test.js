import React from "react";
import Card from "../";
import Thumbnail from "../Thumbnail";
import Details from "../Details";
import Tags from "../Tags";

import { shallow, mount, render } from 'enzyme';

test("render <Card /> component", () => {
    const wrapper = shallow(<Card />);
});
test("render <Thumbnail /> ,<Details /> <Tags /> in  <Card /> component", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.contains(<Thumbnail />)).toEqual(true);
    expect(wrapper.contains(<Details />)).toEqual(true);
    expect(wrapper.contains(<Tags />)).toEqual(true);
});
