import React from "react";
import { shallow, mount, render } from 'enzyme';
import App from "../App";
import TopNav from "../Components/TopNav";
import Search from "../Components/Search";
import Cards from "../Components/Cards";

jest.mock('react-redux');
const useDispatch = jest.fn();

test("renders <App />", () => {
  const wrapper = render(<App />);
});


test("renders <TopNav /> <Search /> <Cards /> in <App /> ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<TopNav />)).toEqual(true);
  expect(wrapper.contains(<Search />)).toEqual(true);
  expect(wrapper.contains(<Cards />)).toEqual(true);
});
