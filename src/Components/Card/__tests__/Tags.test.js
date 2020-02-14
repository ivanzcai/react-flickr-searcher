import React from "react";
import Tags from "../Tags";

import { shallow, mount, render } from 'enzyme';

jest.mock('react-redux');
const useDispatch = jest.fn();


test("render <Tags /> component", () => {
    const wrapper = shallow(<Tags />);
});

// test("render tags botton in the <Tags /> component", () => {
//     const tags = ["sea", "beach", "sun", "bondi"];
//     const tag = "beach";
//     const wrapper = shallow(<Tags tags={tags} />);
//     expect(wrapper.find('.btn')).toHaveLength(4);
//     expect(wrapper.contains(<button type="button" key={tag} onClick={(e) => { dispatch({ type: "ADD_TAG", payload: tag }) }} className="btn btn-outline-info btn-sm">{tag}</button>)).toEqual(true);
// });

