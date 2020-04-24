import React, { Component } from 'react'
import HomePage from '../Home-Page/HomePage';
import Header from './Header';
import ShopPage from '../Shop-Page/ShopPage';
import CredentialsPage from '../Credentials-Page/CredentialsPage';
import { Switch, Route } from 'react-router-dom';
import Hats from '../Clothing-Categories/Hats';
import Jackets from '../Clothing-Categories/Jackets';
import Sneakers from '../Clothing-Categories/Sneakers';
import Womens from '../Clothing-Categories/Womens';
import Mens from '../Clothing-Categories/Mens';
import { auth } from '../../firebase/utils'

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    
    unsubscribeFromAuth = null;
    componentDidMount() {
        // if the user authentication state changes, firebase will send user obj back to this listener
        // we will set the currentUser state to the sent user
        // the user object contains a lot of useful data
        // this is an asynchronous func
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user});
            console.log(user);
        });
    
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser}/>
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
}
export default App;