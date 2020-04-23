import React from 'react';
import CollectionItem from './CollectionItem';
import '../../styles/collections-preview.scss';

function CollectionsPreview ({ title, items }) {
    return (
        <div className="collPreviewWrapper">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map( ({ id, ...otherItemProps }) => <CollectionItem key={id} {...otherItemProps}/>)
                }
            </div>
        </div>  
    )
}
export default CollectionsPreview;