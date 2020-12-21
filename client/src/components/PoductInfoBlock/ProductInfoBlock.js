import React from 'react';
import styles from './ProductInfoBlock.module.sass';

const ProductInfoBlock = ({logo, value}) => {
    return (
        <div className={styles.infoBlock}>
            <span className={styles.label}>{logo}</span>
            <span className={styles.info}>{value}</span>
        </div>
    );
};

export default ProductInfoBlock;