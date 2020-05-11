import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/_db/collections-data/collections-data.actions';
import { CollectionsOverviewContainer } from '../HOCs/CollectionsOverviewContainer';
import { CollectionPageContainer } from '../HOCs/CollectionPageContainer';


// ShopPage gets collections from our firebase db
class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shopPageWrapper">
                <Route exact path={match.path}
                    component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchCollectionsStartAsync: function() {
            return dispatch(fetchCollectionsStartAsync());
        } 
    }
}
export default connect(null, mapDispatchToProps)(ShopPage);
