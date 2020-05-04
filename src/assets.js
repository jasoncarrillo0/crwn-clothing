import hatsImg from './images/hats.png';
import jacketsImg from './images/jackets.png';
import menImg from './images/men.png';
import sneakersImg from './images/sneakers.png';
import womensImg from './images/womens.png';

// HATS
import blueBeanie from './images/shop-img/hats/blue-beanie.png';
import blueSnapback from './images/shop-img/hats/blue-snapback.png';
import brownBrim from './images/shop-img/hats/brown-brim.png';
import brownCowboy from './images/shop-img/hats/brown-cowboy.png';
import greenBeanie from './images/shop-img/hats/green-beanie.png';
import greyBrim from './images/shop-img/hats/grey-brim.png';
import palmTreeCap from './images/shop-img/hats/palm-tree-cap.png';
import redBeanie from './images/shop-img/hats/red-beanie.png';
import wolfCap from './images/shop-img/hats/wolf-cap.png';

// JACKETS
import blackShearling from './images/shop-img/jackets/black-shearling.png';
import blueJeanJacket from './images/shop-img/jackets/blue-jean-jacket.png';
import brownShearling from './images/shop-img/jackets/brown-shearling.png';
import brownTrench from './images/shop-img/jackets/brown-trench.png';
import greyJeanJacket from './images/shop-img/jackets/grey-jean-jacket.png';

//MENS
import camoVest from './images/shop-img/mens/camo-vest.png';
import floralShirt from './images/shop-img/mens/floral-shirt.png';
import longSleeve from './images/shop-img/mens/long-sleeve.png';
import pinkShirt from './images/shop-img/mens/pink-shirt.png';
import polkaDotShirt from './images/shop-img/mens/polka-dot-shirt.png';
import rollupJeanShirt from './images/shop-img/mens/roll-up-jean-shirt.png';


// SNEAKERS
import adidasNmd from './images/shop-img/sneakers/adidas-nmd.png';
import blackConverse from './images/shop-img/sneakers/black-converse.png';
import nikeBrown from './images/shop-img/sneakers/nike-brown.png';
import nikeFunky from './images/shop-img/sneakers/nike-funky.png';
import nikesRed from './images/shop-img/sneakers/nikes-red.png';
import timberlands from './images/shop-img/sneakers/timberlands.png';
import whiteHighTops from './images/shop-img/sneakers/white-nike-high-tops.png';
import yeezy from './images/shop-img/sneakers/yeezy.png';

// WOMENS
import blueTank from './images/shop-img/womens/blue-tank.png';
import floralBlouse from './images/shop-img/womens/floral-blouse.png';
import floralSkirt from './images/shop-img/womens/floral-skirt.png';
import polkaDotDress from './images/shop-img/womens/red-polka-dot-dress.png';
import stripedSweater from './images/shop-img/womens/striped-sweater.png';
import whiteVest from './images/shop-img/womens/white-vest.png';
import yellowSuit from './images/shop-img/womens/yellow-track-suit.png';
export const sections = [
  {
    title: 'hats',
    imageUrl: hatsImg,
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: jacketsImg,
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: sneakersImg,
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: womensImg,
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: menImg,
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];
export const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: brownBrim,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: blueBeanie,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: brownCowboy,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: greyBrim,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: greenBeanie,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: palmTreeCap,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: redBeanie,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: wolfCap,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: blueSnapback,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: adidasNmd,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: yeezy,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: blackConverse,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: whiteHighTops,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: nikesRed,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: nikeBrown,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: nikeFunky,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: timberlands,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: blackShearling,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: blueJeanJacket,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: greyJeanJacket,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: brownShearling,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: brownTrench,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: blueTank,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: floralBlouse,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: floralSkirt,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: polkaDotDress,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: stripedSweater,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: yellowSuit,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: whiteVest,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: camoVest,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: floralShirt,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: longSleeve,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: pinkShirt,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: rollupJeanShirt,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: polkaDotShirt,
        price: 25
      }
    ]
  }
};