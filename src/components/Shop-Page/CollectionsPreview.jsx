import React from 'react';
import CollectionItem from './CollectionItem';
import './collectionsPreview.scss';

function CollectionsPreview ({ title, items }) {
    return (
        <div className="collPreviewWrapper">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map( (item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>  
    )
}
export default CollectionsPreview;