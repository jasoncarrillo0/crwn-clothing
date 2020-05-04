import React from 'react';
import './collectionPage.scss';
import CollectionItem from '../Shop-Page/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collections-data/collections-data.selector'; 

function CollectionPage({ collection }) {
    const { title, items } = collection;
    return (
        <div className="collectionPage">
            <h2 className="title">{title}</h2>
            <div className="items">
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