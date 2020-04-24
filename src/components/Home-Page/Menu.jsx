import React from 'react';
import { sections } from '../../assets.js';
import MenuItem from './MenuItem';
import './menu.scss';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: sections
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {   // title, imageUrl, id, linkUrl
                    this.state.sections.map(({ id, ...sectionProps }) => (
                        <MenuItem key={id} {...sectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Menu;