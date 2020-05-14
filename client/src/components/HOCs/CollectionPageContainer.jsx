import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsLoaded } from '../../redux/_db/collections-data/collections-data.selector';
import CollectionPage from '../Collection-Page/CollectionPage';
import withSpinner from './withSpinner';

const mapStateToProps = createStructuredSelector(
    {
        collectionsLoaded: selectCollectionsIsLoaded,
    }
);

export const CollectionPageContainer = connect(mapStateToProps)(withSpinner(CollectionPage));


