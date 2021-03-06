import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-action';
import CustomButton from '../Reusable/CustomButton';
import styles from './CollectionItem.module.scss';

// items: [
//     {
//       id: 1,
//       name: 'Brown Brim',
//       imageUrl: brownBrim,
//       price: 25
//     },
//     {
//       id: 2,
//       name: 'Blue Beanie',
//       imageUrl: blueBeanie,
//       price: 18
//     },
function CollectionItem({item, addItem}) {
    return (
        <div className={styles.collItemWrapper}>
            <div className={styles.collItemImg} style={{backgroundImage: `url(${item.imageUrl})`}}>
                <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
            </div>
            <div className={styles.collItemBottom}>
                <span>{item.name}</span>
                <span>${item.price}</span>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: function(item) {
            return dispatch(addItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);