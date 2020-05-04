import React from 'react';
import CollectionItem from './CollectionItem';
import styles from './CollectionsPreview.module.scss';

function CollectionsPreview ({ title, items }) {
    return (
        <div className={styles.collPreviewWrapper}>
            <div className={styles.title}>{title.toUpperCase()}</div>
            <div className={styles.preview}>
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