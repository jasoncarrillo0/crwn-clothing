import React from 'react'
import styles from './CollectionsOverview.module.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/collections-data/collections-data.selector';
import CollectionsPreview from './CollectionsPreview';

function collectionsOverview({ collections }) {
    return (
        <div className={styles.collectionsOverview}>
            {
                collections.map( ({id, ...otherCollectionProps}) => (
                    <CollectionsPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionForPreview
    }
)
export default connect(mapStateToProps)(collectionsOverview);