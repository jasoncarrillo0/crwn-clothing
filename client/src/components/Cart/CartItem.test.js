import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CartItem from './CartItem';
configure({adapter: new Adapter()});

let wrapper;
beforeEach(() => {
    const mockProps = {
        item: {
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51XX3NKAVAL._AC_.jpg',
            price: 20,
            name: "Blue hat",
            quantity: 2
        }
    }
    wrapper = shallow(<CartItem {...mockProps}/>)
})

it('expect to render CartItem', () => {
    expect(wrapper).toMatchSnapshot();
});
