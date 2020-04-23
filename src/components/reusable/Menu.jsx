import React from 'react';
import { sections } from '../../assets.js';
import MenuItem from './MenuItem';
import '../styles/directory.scss';

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
                {
                    this.state.sections.map(( {title, imageUrl, id, linkUrl, size} ) => (
                        <MenuItem title={title} imageUrl={imageUrl} id={id} linkUrl={linkUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Menu;