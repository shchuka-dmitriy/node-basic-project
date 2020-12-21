import React, {useState} from 'react';
import styles from "./CreateProductPage.module.sass";
import ProductForm from "../../components/ProductForm/ProductForm";
import BackButton from "../../components/BackButton/BackButton";
import RadioButton from "../../components/RadioButton/RadioButton";

const CreateProductPage = () => {
    const [productType, setProductType] = useState("phone");
    const getProductType = (value) => {
        setProductType(value);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.backButtonsContainer}>
                <BackButton/>
            </div>

            <div className={styles.contextContainer}>
                <div className={styles.radioButtonContainer}>
                    <RadioButton getProductType={getProductType}/>
                </div>

                <div className={styles.descriptionContainer}>
                    <div className={styles.creatingContainer}>
                        <ProductForm productType={productType} isEdit={false}/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CreateProductPage;