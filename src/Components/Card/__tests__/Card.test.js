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


test("render <Card /> with props", () => {
    const wrapper = shallow(<Card cardInfo={cardInfo} />);
});


const cardInfo = {
    thumbnail: "https://live.staticflickr.com/65535/49524078366_0175a57a0a_m.jpg",
    full_image: "https://live.staticflickr.com/65535/49524078366_0175a57a0a_m.jpg",
    details: {
        author: "john",
        date: "2017/11/02"
    },
    tags: ["sea", "beach", "sun", "bondi"]
}