import React from 'react';
import styles from './CollectionPage.module.scss';
import CollectionItem from '../Shop-Page/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/_db/collections-data/collections-data.selector'; 

function CollectionPage({ collection }) {
    const { title, items } = collection;
    return (
        <div className={styles.collectionPage}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
                {
                    items.map( item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);