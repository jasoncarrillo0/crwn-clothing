import React, { Component } from 'react'
import HomePage from '../Home-Page/HomePage';
import Header from './Header';
import ShopPage from '../Shop-Page/ShopPage';
import CredentialsPage from '../Credentials-Page/CredentialsPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Hats from '../Clothing-Categories/Hats';
import Jackets from '../Clothing-Categories/Jackets';
import Sneakers from '../Clothing-Categories/Sneakers';
import Womens from '../Clothing-Categories/Womens';
import Mens from '../Clothing-Categories/Mens';
import { auth, createUserProfileDoc } from '../../firebase/utils'
import { setCurrentUser } from '../../redux/user-actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user.selectors';
import CheckoutPage from '../Checkout-Page/CheckoutPage'

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
                    <Route exact path="/checkout" component={CheckoutPage}/>
                    <Route path="/sign-in" 
                           render={ () => this.props.currentUser ? (
                                <Redirect to="/"/>
                                ) : (
                                <CredentialsPage/>
                                )
                           }
                    />
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/cart" component={Hats}/>
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
// params: dispatch function from connect
// return: an object: {setCurrentUser: dispatchFunc}
// purpose: allow us to use an an action we defined in the App. It is destructured as setCurrentUser
function mapDispatchToProps(dispatch) {
    // key value will be the prop we destructure, and it's value as a key can be called since the value is a function
    // the key name is essentially becomes the name of the anonymous function
    return {
        setCurrentUser: function(user) {
            return dispatch(setCurrentUser(user));
        }
    }
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectUser
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);