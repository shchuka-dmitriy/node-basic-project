import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CONSTANTS from '../../constants';

export default function RadioButton({getProductType}) {
    const [productType, setProductType] = React.useState(CONSTANTS.PHONE);
    const handleChange = (event) => {
        setProductType(event.target.value);
        getProductType(event.target.value)
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Product type</FormLabel>
            <RadioGroup aria-label="productType" name="productType" value={productType} onChange={handleChange}>
                <FormControlLabel value={CONSTANTS.PHONE} control={<Radio />} label="Phone" />
                <FormControlLabel value={CONSTANTS.TABLET} control={<Radio />} label="Tablet" />
                <FormControlLabel value={CONSTANTS.NOTEBOOK} control={<Radio />} label="Notebook" />
            </RadioGroup>
        </FormControl>
    );
}


