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
import { auth, createUserProfileDoc } from '../../firebase/utils'
import { setCurrentUser } from '../../redux/user-actions';
import { connect } from 'react-redux';


class App extends Component {    
    unsubscribeFromAuth = null;

    componentDidMount() {
        // given from connect high order component
        const { setCurrentUser } = this.props;
        // if the user authentication state changes, firebase will send user obj back to this listener
        // we will set the currentUser state to the sent user
        // the user object contains a lot of useful data
        // this is an asynchronous func
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                // below code may look confusing since this is all asynchronous logic
                const userRef = await createUserProfileDoc(userAuth);
                // async function that will return a snapshot object
                // onSnapShot is a function but conceptually similar to an event listener
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            } 
            else {
                // if the async function returns null, set state to null
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header />
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

function mapDispatchToProps(dispatch) {
    return {
        setCurrentUser: function(user) {
            return dispatch(setCurrentUser(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(App);