import { removeItemFromCart } from './cart-action';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import cartReducer from './cart-reducer';

describe('intitial state', () => {
    
    const INITIAL_STATE = {
        cartIsHidden: false,
        items: []
    }
    it('should return the intitial state', () => {
        expect(cartReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });

    const items = [
        {
            id: 1,
            name: 'blue hat',
            imageUrl: 'google.com'
        },
        {
            id: 2,
            name: 'red hat',
            imageUrl: 'google.com'
        },
        {
            id: 3,
            name: 'grey hat',
            imageUrl: 'google.com'
        }
    ]
    const itemToRemove = {id: 1, name: 'blue hat', imageUrl: 'google.com'};
    it('should remove an item from the items array', () => {
        expect(cartReducer({cartIsHidden: false, items}, removeItemFromCart(itemToRemove)))
        .toEqual({ cartIsHidden: false, items: [
            {
                id: 2,
                name: 'red hat',
                imageUrl: 'google.com'
            },
            {
                id: 3,
                name: 'grey hat',
                imageUrl: 'google.com'
            }
        ]});
    });
});