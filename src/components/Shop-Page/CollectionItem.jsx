import React from 'react';


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
function CollectionItem({id, name, imageUrl, price}) {
    return (
        <div class="collItemWrapper">
            <div className="collItemImg" style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className="collItemBottom">
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}
export default CollectionItem;