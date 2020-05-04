import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import the localStorage object from browser; you can also get sessionStorage
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory-data/directory.reducer';
import collectionsReducer from './collections-data/collections-data.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // value is an array of which reducers you want to store in storage obj
    // we only want 'cart' because firebase handles the user storage.
}

const rootReducer = combineReducers({
    // if the reducer has more than one action, each action will be a key
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collections: collectionsReducer
});

export default persistReducer(persistConfig, rootReducer)
