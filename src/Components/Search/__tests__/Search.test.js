import React from "react";
import Search from "../";
import { shallow, mount, render } from 'enzyme';


jest.mock('react-redux');
const useDispatch = jest.fn();

test("render <Search /> component", () => {
    const wrapper = shallow(<Search />);
});
