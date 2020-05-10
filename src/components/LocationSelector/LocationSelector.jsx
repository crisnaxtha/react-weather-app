import React from 'react';
import styles from './LocationSelector.module.css';

import { TextField, Button } from '@material-ui/core';

const LocationSelector = ({ getCity }) => {
    return (
        <div className={ styles.container }>
            <form className={ styles.form } noValidate autoComplete="off">
                <TextField id="city" label="Enter City Name" variant="outlined" className={ styles.formInput } />
                <Button variant="contained" color="secondary" onClick={() => getCity(document.getElementById('city').value) }> Search </Button>
            </form>
        </div>
    )
}

export default LocationSelector;