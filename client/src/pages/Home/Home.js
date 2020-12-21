import React from 'react';
import styles from "./Home.module.sass"
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import history from "../../browserHistory";

const Home = () => {
    const goToCreateProduct = () => {
        history.push('/createProduct');
    };

    return (
        <div className={styles.mainContainer}>
            <Header/>
            <ProductsList/>
            <button onClick={goToCreateProduct} className={styles.createButton}>
                create new product
            </button>
        </div>
    )
};

export default Home;