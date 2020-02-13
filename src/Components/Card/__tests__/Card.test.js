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
    expect(wrapper.contains(<Thumbnail thumbnail_link={thumbnail_link} full_image_link={full_image_link} />)).toEqual(true);
    expect(wrapper.contains(<Details details={cardInfo.details} />)).toEqual(true);
    expect(wrapper.contains(<Tags tags={cardInfo.tags} />)).toEqual(true);
});


const cardInfo = {
    thumbnail_link: "https://live.staticflickr.com/65535/49524078366_0175a57a0a_m.jpg",
    full_image_link: "https://live.staticflickr.com/65535/49524078366_0175a57a0a_m.jpg",
    details: {
        author: "john",
        date: "2017/11/02"
    },
    tags: ["sea", "beach", "sun", "bondi"]
}