import React from "react";
import Tags from "../Tags";

import { shallow, mount, render } from 'enzyme';

test("render <Tags /> component", () => {
    const wrapper = shallow(<Tags />);
});

test("render tags botton in the <Tags /> component", () => {
    const tags = ["sea", "beach", "sun", "bondi"];
    const wrapper = shallow(<Tags tags={tags} />);
    expect(wrapper.find('.btn')).toHaveLength(4);
    expect(wrapper.contains(<button type="button" className="btn btn-outline-info btn-sm">beach</button>)).toEqual(true);
});

