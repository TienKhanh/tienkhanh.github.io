import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/common/Header';
import Footer from '../../component/common/Footer';
import BreadCrumb from '../../component/common/BreadCrumb';


const useStyles = makeStyles(() => ({
    wrapMain : {
        background: '#eeeeee',
        minHeight: '820px',
    }
}));

const Store = () => {
    const classes = useStyles();

    // lay du lieu thi o day
    return (
        <div> 
            <Header />
            <div className={classes.wrapMain}>
                <BreadCrumb />
            </div>
            <Footer />
        </div>
    )
}

export default Store