import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";

test("class app test", () => {
  const component1 = shallow(<App />);
  const component2 = component1.find(".App");
  expect(component2.length).toBe(1);
});
