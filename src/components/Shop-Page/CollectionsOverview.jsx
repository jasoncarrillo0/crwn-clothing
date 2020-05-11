import React from 'react'
import styles from './CollectionsOverview.module.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/_db/collections-data/collections-data.selector';
import CollectionsPreview from './CollectionsPreview';

function collectionsOverview({ firebaseCollections }) {
    return (
        <div className={styles.collectionsOverview}>
            {
                firebaseCollections.map( ({id, ...otherCollectionProps}) => (
                    <CollectionsPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {
        firebaseCollections: selectCollectionForPreview
    }
)
export default connect(mapStateToProps)(collectionsOverview);