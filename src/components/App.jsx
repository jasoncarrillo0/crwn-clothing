import React from 'react'
import HomePage from './Home-Page/HomePage';
import Header from './Header';
import ShopPage from './Shop-Page/ShopPage';
import CredentialsPage from './Credentials-Page/CredentialsPage';
import { Switch, Route } from 'react-router-dom';
import Hats from './Clothing-Categories/Hats';
import Jackets from './Clothing-Categories/Jackets';
import Sneakers from './Clothing-Categories/Sneakers';
import Womens from './Clothing-Categories/Womens';
import Mens from './Clothing-Categories/Mens';

const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/sign-in" component={CredentialsPage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/shop/hats" component={Hats}/>
                <Route path="/shop/jackets" component={Jackets}/>
                <Route path="/shop/sneakers" component={Sneakers}/>
                <Route path="/shop/womens" component={Womens}/>
                <Route path="/shop/mens" component={Mens}/>
            </Switch>
        </>
    )
}
export default App;