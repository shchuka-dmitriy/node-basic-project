import React from 'react';
import styles from './ListItem.module.sass';

class ListItem extends React.Component {

    /**
     *
     * @description Creates users list element
     * @return {JSX.Element} - Users list element
     */
    renderProductItem = () => {
        const {id, productName, Attribute: {price, weight, color, dualSim, videoCard}} = this.props.data;
        return (
            <button onClick={() => this.props.goToExtended(id)} className={styles.productMainContainer}>
                <div className={styles.descriptionContainer}>
                    <span className={styles.productName}>{productName}</span>

                    <div className={styles.infoContainer}>
                        <div className={styles.infoWrapper}>
                            <span className={styles.title}>price: {price} $</span>
                            <span className={styles.title}>weight: {weight} gr</span>
                        </div>

                        <div className={styles.infoWrapper}>
                            <span className={styles.title}>color: {color}</span>
                            {
                                dualSim !== null &&
                                <span className={styles.title}>
                                    { !dualSim ? 'single sim card' : 'dual sim card' }
                                </span>
                            }
                            {
                                videoCard && <span className={styles.title}>video card: {videoCard}</span>
                            }
                        </div>
                    </div>
                </div>
            </button>
        )
    };

    render()
    {
        return (
            <>
                {this.renderProductItem()}
            </>
        )
    }
}

export default ListItem;