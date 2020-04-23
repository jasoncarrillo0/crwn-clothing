import React, { Component } from 'react';
import CollectionsPreview from './CollectionsPreview';
import SHOP_DATA  from '../../assets';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shopPageWrapper">
                {
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectionsPreview key={id} {...otherCollectionProps}/>
                    ))
                }

            </div>
        )
    }
}

export default ShopPage;
