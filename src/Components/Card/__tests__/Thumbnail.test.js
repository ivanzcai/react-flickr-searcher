import React from "react";
import Card from "../";
import Thumbnail from "../Thumbnail";

import { shallow, mount, render } from 'enzyme';

test("render <Thumbnail /> component", () => {
    const wrapper = shallow(<Thumbnail />);
});

test("render <Thumbnail /> component", () => {
    const thumbnail_link = "https://test.jpg"
    const full_image_link = "https://testlarge"
    const wrapper = shallow(<Thumbnail thumbnail_link={thumbnail_link} full_image_link={full_image_link} />);
    expect(wrapper.contains(<img width="100%" height="225" src="https://test.jpg" onClick={() => window.open("https://testlarge", "_blank")} />)).toEqual(true);
});