import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/_db/collections-data/collections-data.selector';
import CollectionsOverview from '../Shop-Page/CollectionsOverview';
import withSpinner from './withSpinner';

const mapStateToProps = createStructuredSelector(
    {
        loading: selectIsFetching
    }
);

export const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview));