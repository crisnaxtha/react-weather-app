import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import KelvinToCelsius from './KelvinToCelsius';

const Cards = ({data: { temp, humidity, pressure }}) => {
    return (
        <div className={ styles.container }>
           <Grid container direction="row" justify="center" alignItems="center" >
                <Grid item component={ Card } xs={12} md={3} className={ cx(styles.card, styles.card_1)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Temperature</Typography>
                        <Typography variant="h5">{ KelvinToCelsius(temp) } Degree Celsius</Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2"></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={3} className={ cx(styles.card, styles.card_2)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Humidity</Typography>
                        <Typography variant="h5">{ humidity } %</Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2"></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={3} className={ cx(styles.card, styles.card_3)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Pressure</Typography>
                        <Typography variant="h5">{ pressure } hpa</Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2"></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;