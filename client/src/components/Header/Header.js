import React from 'react';
import styles from './Header.module.sass';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {headerRequest} from '../../actions/actionCreator';
import LoginButtons from "../LoginButtons/LoginButtons";

class Header extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.getUser();
        }
    }

    render() {
        if (this.props.isFetching) {
            return null;
        }
        return (
            <div className={styles.headerContainer}>
                <div className={styles.loginSignUpHeaders}>
                    <div className={styles.userButtonsContainer}>
                        <LoginButtons data={this.props.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.userStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(headerRequest()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));