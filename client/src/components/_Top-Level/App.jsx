import React, { Component } from 'react'
import HomePage from '../Home-Page/HomePage';
import Header from './Header';
import ShopPage from '../Shop-Page/ShopPage';
import CredentialsPage from '../Credentials-Page/CredentialsPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/user.selectors';
import CheckoutPage from '../Checkout-Page/CheckoutPage'
import { checkUserSession } from '../../redux/user/user-actions';

class App extends Component {    

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
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
                </Switch>
            </>
        )
    }
}


// params: dispatch function from connect
// return: an object: {setCurrentUser: dispatchFunc}
// purpose: allow us to use an an action we defined in the App. It is destructured as setCurrentUser
// function mapDispatchToProps(dispatch) {
//     // key value will be the prop we destructure, and it's value as a key can be called since the value is a function
//     // the key name is essentially becomes the name of the anonymous function
//     return {
//         setCurrentUser: function(user) {
//             return dispatch(setCurrentUser(user));
//         }
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        checkUserSession: function() {
            return dispatch(checkUserSession())
        }
    }
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectUser
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);