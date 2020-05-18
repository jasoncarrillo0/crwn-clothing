import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomButton from './CustomButton';

configure({adapter: new Adapter()});

it('expect to render CustomButton', () => {
    expect(shallow(<CustomButton>Test Button String</CustomButton>)).toMatchSnapshot();
})

