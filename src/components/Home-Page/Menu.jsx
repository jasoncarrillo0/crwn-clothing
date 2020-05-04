import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory-data/directory.selectors'
import MenuItem from './MenuItem';
import './menu.scss';

function Menu ({ sections }) {

    return (
        <div className="directory-menu">
            {   // title, imageUrl, id, linkUrl
                sections.map(({ id, ...sectionProps }) => (
                    <MenuItem key={id} {...sectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {
        sections: selectDirectorySections
    }
);

export default connect(mapStateToProps)(Menu);