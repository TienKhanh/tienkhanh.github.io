import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../component/common/ProductCard';

const useStyles = makeStyles(() => ({

}));

const Store = () => {
    const classes = useStyles();

    // lay du lieu thi o day
    return (
        <div className={classes.mainStore} > 
            <ProductCard />
        </div>
        

    )
}

export default Store