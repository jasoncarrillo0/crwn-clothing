import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function CategoriesDropdown() {
    return (
        <>

        <style type="text/css">
          {`
            .btn-gray {
              background-color: white;
              border-color: white;
              box-shadow: none;
              color: black;
            }

            .btn-gray:focus {
              box-shadow: none;
            }

            .btn-gray::after {
              margin-left: 1rem;
            }

            .btn-gray.dropdown-toggle {
              color: black;
              background-color: white;
              border-color: white;
            }
            
            .styled:hover {
              background-color: #dadada;
            }
          `}
        </style>
        <DropdownButton
          variant="gray"
          title="CATEGORIES"
        >
          <Dropdown.Item bsPrefix="dropdown-item styled" href="/shop/hats">Hats</Dropdown.Item>
          <Dropdown.Item bsPrefix="dropdown-item styled" href="/shop/jackets">Jackets</Dropdown.Item>
          <Dropdown.Item bsPrefix="dropdown-item styled" href="/shop/sneakers">Sneakers</Dropdown.Item>
          <Dropdown.Item bsPrefix="dropdown-item styled" href="/shop/womens">Womens</Dropdown.Item>
          <Dropdown.Item bsPrefix="dropdown-item styled" href="/shop/mens">Mens</Dropdown.Item>
        </DropdownButton>
      </>
    );
}
export default CategoriesDropdown;