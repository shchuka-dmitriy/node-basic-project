import React from 'react';
import {connect} from 'react-redux';
import styles from './ProductsList.module.sass';
import { getProductsAction } from "../../actions/actionCreator";
import ListItem from "../ListItem/ListItem";
import Spinner from '../../components/Spinner/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';
import history from "../../browserHistory";
import classNames from 'classnames';
import { confirmAlert } from 'react-confirm-alert';
import CONSTANTS from '../../constants';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 8,
            offset: 0
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     *
     * @description Get new products data from server
     */
    getData = () => {
        this.props.getProductsArr(Object.assign({}, {
            limit: this.state.limit,
            offset: this.state.offset
        }));
    };

    prevButtonHandler = () => {
        if (this.state.offset > 0) {
            this.setState({
                offset: --this.state.offset
            });
            this.getData();
        }
    };

    nextButtonHandler = () => {
        if (this.props.products.length >= 8) {
            this.setState({
                offset: ++this.state.offset
            });
            this.getData();
        }
    };

    /**
     *
     * @description Redirect to the Product info page
     * @param {Number} product_id
     */
    goToExtended = (product_id) => {
        localStorage.getItem(CONSTANTS.ACCESS_TOKEN)
            ? window.location.assign('/product/' + product_id)
            : confirmAlert({
                message: `First you need to log in, please`,
                buttons: [
                    {
                        label: 'Ok',
                        onClick: () => {
                            history.push('/registration')
                        }
                    }]
            });
    };

    /**
     * @description Create list of html elements (products)
     * @return {html[]}
     */
    setProductsList = () => {
        const { products } = this.props;
        return [...products.values()].map(productData =>
            <ListItem id={productData.id} key={productData.id + 1} data={productData} goToExtended={this.goToExtended}/>)
    };

    render() {
        const { error, isFetching, haveMore } = this.props;
        return (
            <>
                <div className={styles.mainInfoContainer}>
                    {error ? <div className={styles.tryContainer}> <TryAgain getData={this.getData}/> </div> :
                        (
                            <div className={styles.productsContainerWrapper}>
                                {
                                    isFetching
                                    ?   <div className={styles.containerSpinner}>
                                            <Spinner/>
                                        </div>
                                    :
                                        <div className={styles.productsContainer}>
                                            { this.setProductsList() }
                                        </div>
                                }
                                <div className={styles.paginationContainer}>
                                    <button className={ classNames(styles.paginationButton,
                                        this.state.offset === 0 && styles.notActive) }
                                            onClick={this.prevButtonHandler}>prev</button>
                                    <button className={classNames(styles.paginationButton, !haveMore && styles.notActive)}
                                            onClick={this.nextButtonHandler}>next</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.productsStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsArr: (data) => dispatch(getProductsAction(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);