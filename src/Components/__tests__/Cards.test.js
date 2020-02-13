import React from "react";
import { Cards } from "../Cards";
import Card from "../Card";
import { shallow, mount, render } from 'enzyme';

test("render <Cards /> component", () => {
    const wrapper = shallow(<Cards />);
});

test("render multiple <Card> in <Cards /> component", () => {
    const wrapper = shallow(<Cards cardItems={cardItems} />);
    expect(wrapper.find(Card)).toHaveLength(2);
});

const cardItems = [
    {
        thumbnail_link: "https://test.com/1.jpg",
        full_image_link: "https://test.com/2",
        details: {
            author: "ivan",
            date: "2020-01-25"
        },
        tags: ["sea", "beach", "sun", "bondi"]
    },
    {
        thumbnail_link: "https://test2.com/1.jpg",
        full_image_link: "https://test2.com/2",
        details: {
            author: "john",
            date: "2020-02-25"
        },
        tags: ["moon", "bat", "dark"]
    },
]