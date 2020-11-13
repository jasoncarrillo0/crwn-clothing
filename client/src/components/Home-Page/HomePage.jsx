import React from 'react';
import styles from './Homepage.module.scss';
import Menu from './Menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchHomePageSectionsStart } from '../../redux/_db/home-page-sections-data/sections-data.actions';
import { selectSectionsAreLoading } from '../../redux/_db/home-page-sections-data/sections-data.selectors';
import Words from './Words';
import withSpinner from '../HOCs/withSpinner';

const MenuWithSpinner = withSpinner(Menu);


class HomePage extends React.Component {

    componentDidMount() {
        const { fetchHomePageSectionsStart } = this.props;
        fetchHomePageSectionsStart();
    }

    render() {
        const { sectionsAreLoading, match } = this.props;
        
        return (
            <div className={styles.homepage}>
                <Words/>
                <MenuWithSpinner match={match} loading={sectionsAreLoading}/>
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
        fetchHomePageSectionsStart: function() {
            return dispatch(fetchHomePageSectionsStart());
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
