import React from 'react'
import './index.css'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    mainStore: {
        backgroundColor: 'red',
    }
}));

const Store = () => {
    const classes = useStyles();

    // lay du lieu thi o day
    return (
        <div className={classes.mainStore} > day la store </div>
        

    )
}

export default Store