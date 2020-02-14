import React from "react";
import SelectedTags from "../SelectedTags";
import { shallow, mount, render } from 'enzyme';


jest.mock('react-redux');
const useDispatch = jest.fn();

test("render <SelectedTags /> component", () => {
    const wrapper = shallow(<SelectedTags />);
});


test("render 3 span tags component with 3 selected tags", () => {
    const selectedTags = ["beach", "sand", "water"]
    const wrapper = shallow(<SelectedTags selectedTags={selectedTags} />);
    expect(wrapper.find('span')).toHaveLength(3);
});
