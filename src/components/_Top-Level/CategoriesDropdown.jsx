import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function CategoriesDropdown() {
    return (
        <>
        <DropdownButton
          variant="primary"
          title="CATEGORIES"
        >
          <Dropdown.Item href="/shop/hats">Hats</Dropdown.Item>
          <Dropdown.Item href="/shop/jackets">Jackets</Dropdown.Item>
          <Dropdown.Item href="/shop/sneakers">Sneakers</Dropdown.Item>
          <Dropdown.Item href="/shop/womens">Womens</Dropdown.Item>
          <Dropdown.Item href="/shop/mens">Mens</Dropdown.Item>
        </DropdownButton>
      </>
    );
}
export default CategoriesDropdown;