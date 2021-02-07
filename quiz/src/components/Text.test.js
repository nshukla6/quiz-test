import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Text from './Text';
import { findByTestAttr } from "../../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Text {...props} />)
}

test('renders Text Component', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-text')
    expect(component.length).toBe(1);
});