import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import cartReducer from './cart-reducer';


export default combineReducers({
    // if the reducer has more than one action, each action will be a key
    user: userReducer,
    cart: cartReducer
});
