import React from 'react';
import CollectionItem from './CollectionItem';
import styles from './CollectionsPreview.module.scss';
import { withRouter } from 'react-router-dom';

function CollectionsPreview ({ title, routeName, items, match, history }) {
    return (
        <div className={styles.collPreviewWrapper}>
            <div 
                className={styles.title} 
                onClick={() => history.push(`${match.url}/${routeName}`) }
            >
                {title.toUpperCase()}
            </div>
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
export default withRouter(CollectionsPreview);