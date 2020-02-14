import React from "react";
import { Search } from "../";
import { shallow, mount, render } from 'enzyme';
import { connect } from 'react-redux'


test("render <Search /> component", () => {
    const wrapper = shallow(<Search />);
});
