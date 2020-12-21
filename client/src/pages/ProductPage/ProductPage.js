import React from 'react';
import {connect} from 'react-redux';
import styles from './ProductPage.module.sass';
import CONSTANTS from '../../constants';
import TryAgain from '../../components/TryAgain/TryAgain';
import { deleteProductAction, getProductsAction, getProductByIdAction } from "../../actions/actionCreator";
import BackButton from "../../components/BackButton/BackButton";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Spinner from '../../components/Spinner/Spinner';
import ProductForm from "../../components/ProductForm/ProductForm";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     *
     * @description Get product data from server
     */
    getData = () => {
        const { params } = this.props.match;
        this.props.getProduct(params.id);
    };

    /**
     *
     * @description Delete product
     * @param {Class} product
     */
    deleteCurrentProduct = (product) => {
        if ( window.confirm('Are you sure wish to delete this Product?') ) {
            this.props.deleteProduct(product.currentTarget.id);
            this.props.getProductsArr();
            window.location.assign(CONSTANTS.HOME_URL);
        }
    };

    /**
     *
     * @description Set view mode between Display and Edit product
     */
    changeViewMode = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    /**
     *
     * @description Get default product data for Edit page
     */
    getProductObjInfo = () => {
        const {productName, Attribute: { price, weight, color, dualSim, videoCard } } = this.props.selectProductStore.selectProductData;
        const defaultData = {};
        const data = { productName, price, weight, color, dualSim, videoCard };

        Object.keys(data).forEach((key) => {
            if (data[key]) {
                defaultData[key] = data[key];
            }
        });
        return defaultData;
    };

    render() {
        const {isEdit} = this.state;
        const {selectProductStore, match: {params: {id}}, error} = this.props;
        const {selectProductData, isFetching} = selectProductStore;

        return (
            <div>
                {error ? <div className={styles.tryContainer}><TryAgain getData={this.getData}/></div> :
                    (
                        isFetching ?
                            <div className={styles.containerSpinner}>
                                <Spinner/>
                            </div>
                            :
                            <div className={styles.mainInfoContainer}>
                                <div className={styles.backButtonsContainer}>
                                    <BackButton/>
                                    {
                                        <div>
                                            <button id={id} onClick={this.deleteCurrentProduct}
                                                    className={styles.buttonEdit}>
                                                Delete
                                            </button>
                                            <button onClick={this.changeViewMode} className={styles.buttonEdit}>
                                                { isEdit ? "Cancel" : "Edit" }
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div className={styles.mainContainerWrapper}>
                                    {
                                        isEdit ? <ProductForm defaultData={this.getProductObjInfo()}
                                                       productId={selectProductData.id} isEdit={isEdit}
                                                 />
                                            :
                                            <div className={styles.infoContainer}>
                                                <ProductInfo productData={selectProductData} productId={id}/>
                                            </div>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {selectProductStore, productStore} = state;
    return {selectProductStore, productStore};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsArr: () => dispatch(getProductsAction()),
        getProduct: (id) => dispatch(getProductByIdAction(id)),
        deleteProduct: (id) => dispatch(deleteProductAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);