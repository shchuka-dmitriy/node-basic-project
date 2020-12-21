import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import FormRadioInput from '../FormRadioInput/FormRadioInput';
import Error from '../Error/Error';
import { confirmAlert } from 'react-confirm-alert';
import '../../assets/styles/react-confirm-alert.css';
import { createProductAction, updateProductAction } from "../../actions/actionCreator";
import styles from '../../assets/styles/Form.module.sass';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';
import CONSTANTS from '../../constants';

const ProductForm = ({ handleSubmit, authClear, updateProduct, createProduct, authError, isEdit, defaultData,
                         productId, productType }) => {

    const formInputClassNames = {
        container: null,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    const onSubmit = (productData) => {
        confirmAlert({
            message: isEdit ? 'Are you sure wish to update Product?' : 'Are you sure wish to create new Product?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        productData.productType = productType;
                        isEdit ? updateProduct(productData, productId) : createProduct(productData);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    };

    const renderSpecialInputs = () => {
        switch (productType) {
            case CONSTANTS.TABLET: {
                return (
                    <>
                        <span className={styles.fieldLabel}>What is the type of sim card?</span>
                        <div className={styles.choseRoleContainer}>
                            <Field name='dualSim' value={false} typeCard='Single card'
                                   infoType='The phone can use only one sim card.'
                                   id='dualSim'
                                   component={FormRadioInput}
                                   classes={formInputClassNames}
                                   type='radio'
                                   normalize={value => value === 'true'} />
                            <Field name='dualSim' value={true} typeCard='Dual card'
                                   infoType='The phone can use dual sim card.'
                                   id='single'
                                   component={FormRadioInput}
                                   classes={formInputClassNames}
                                   type='radio'
                                   normalize={value => value === 'true'} />
                        </div>
                    </>
                )
            }
            case CONSTANTS.NOTEBOOK: {
                return (
                    <>
                        <span className={styles.fieldLabel}>What is the video card of the notebook?</span>
                        <Field
                            name = 'videoCard'
                            component = {FormInput}
                            classes = {formInputClassNames}
                            type = 'text'
                            label = 'Video card'
                        />
                    </>
                )
            }
            default:
                return null
        }
    };

    const renderForm = () => {
        return (
            <form onSubmit={ handleSubmit(onSubmit) }>
                <span className={styles.fieldLabel}>What is the name of the product?</span>
                <Field
                    name = 'productName'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'text'
                    label = 'Product name'
                />
                <span className={styles.fieldLabel}>What is the weight of the product?</span>
                <Field
                    name = 'weight'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'number'
                    label = 'Weight'
                />
                <span className={styles.fieldLabel}>What is the color of the product?</span>
                <Field
                    name = 'color'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'text'
                    label = 'Color'
                />
                <span className={styles.fieldLabel}>What is the price of the product?</span>
                <Field
                    name = 'price'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'number'
                    label = 'Price'
                />

                { renderSpecialInputs() }

                <div className={styles.submitContainerWrapper}>
                    <button type='submit' className={styles.submitContainer}>
                        <span className={styles.submitButton}>
                            { isEdit ? "edit product" : "create new product" }
                        </span>
                    </button>
                </div>
            </form>
        )
    };

    return (
        <div className={styles.loginForm}>
            { authError && <Error data={authError.data} status={authError.status} clearError={authClear}/> }
            { renderForm() }
        </div>
    );
};

const mapStateToProps = ({auth}, ownProps) => {
    const authError = auth.error;
    return {authError, initialValues: ownProps.defaultData};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (productData) => dispatch( createProductAction(productData) ),
        updateProduct: (productData, id) => dispatch( updateProductAction(productData, id) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'productForm',
    enableReinitialize: true,
    validate: customValidator(Schemes.ProductSchema)
})(ProductForm));