import React from 'react';
import styles from './FormRadioInput.module.sass';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";

const FormRadioInput = ({id, typeCard, infoType, input}) => {
    return (
        <label htmlFor={id}>
            <div className={styles.radioButtonContainer}>
                <FormControl component="fieldset">
                    <div className={styles.buttonInfoContainer}>
                        <RadioGroup aria-label="productType">
                            <FormControlLabel className={styles.cardType} {...input} control={<Radio />} label={typeCard}/>
                            <span className={styles.cardTypeInfo}>{infoType}</span>
                        </RadioGroup>
                    </div>
                </FormControl>
            </div>
        </label>
    )
};

FormRadioInput.propTypes = {
    typeCard: PropTypes.string.isRequired,
    infoType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default FormRadioInput;