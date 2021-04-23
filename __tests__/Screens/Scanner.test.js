import React from "react";
import renderer from 'react-test-renderer';
import { Scanner } from '../../Screens/Scanner';

it(`renders correctly`, () => {
  const tree = renderer.create(<Scanner />).toJSON();
  expect(tree).toMatchSnapshot();
});