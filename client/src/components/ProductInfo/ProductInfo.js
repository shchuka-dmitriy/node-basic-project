import React from 'react';
import styles from './ProductInfo.module.sass';
import ProductInfoBlock from "../PoductInfoBlock/ProductInfoBlock";

const ProductInfo = (props) => {
    const {productData} = props;
    const {productName, Attribute: { price, weight, color, dualSim, videoCard } } = productData;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <ProductInfoBlock logo={'Product name'} value={productName}/>
                <ProductInfoBlock logo={'Price'} value={price}/>
                <ProductInfoBlock logo={'Weight'} value={weight}/>
                <ProductInfoBlock logo={'Color'} value={color}/>
                {
                    dualSim !== null &&
                    <ProductInfoBlock logo={'Sim card'} value={dualSim ? 'Dual sim card' : 'Single sim card'}/>
                }
                {
                    videoCard && <ProductInfoBlock logo={'Video card'} value={videoCard}/>
                }
            </div>
        </div>
    )
};

export default ProductInfo;