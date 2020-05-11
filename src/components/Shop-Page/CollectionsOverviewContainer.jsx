import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsLoaded, selectIsFetching } from '../../redux/_db/collections-data/collections-data.selector';
import withSpinner from '../HOCs/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector(
    {
        loading:  selectIsFetching
    }
)

const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview));
export default CollectionsOverviewContainer;