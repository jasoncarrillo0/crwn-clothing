import React from 'react';
import styles from './Homepage.module.scss';
import Menu from './Menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchHomePageSectionsAsync } from '../../redux/_db/home-page-sections-data/sections-data.actions';
import { selectSectionsAreLoading } from '../../redux/_db/home-page-sections-data/sections-data.selectors';
import withSpinner from '../HOCs/withSpinner';

const MenuWithSpinner = withSpinner(Menu);

class HomePage extends React.Component {

    componentDidMount() {
        const { fetchHomePageSectionsAsync } = this.props;
        fetchHomePageSectionsAsync();
    }

    render() {
        const { sectionsAreLoading } = this.props;
        return (
            <div className={styles.homepage}>
                <MenuWithSpinner loading={sectionsAreLoading}/>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector(
    {
        sectionsAreLoading: selectSectionsAreLoading
    }
)


function mapDispatchToProps(dispatch) {
    return {
        fetchHomePageSectionsAsync: function() {
            return dispatch(fetchHomePageSectionsAsync());
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
