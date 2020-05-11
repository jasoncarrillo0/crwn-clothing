import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFormattedSections } from '../../redux/_db/home-page-sections-data/sections-data.selectors';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

function Menu({ sections }) {

    return (
        <div className={styles.directoryMenu}>
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
        sections: selectFormattedSections
    }
)


export default connect(mapStateToProps)(Menu);