import React from 'react';
import CollectionsOverview from './CollectionsOverview';
import CollectionPage from '../Collection-Page/CollectionPage';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

function ShopPage({ match }) {
    return (
        <div className="shopPageWrapper">
            <Route exact path={match.path} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}
export default ShopPage;
