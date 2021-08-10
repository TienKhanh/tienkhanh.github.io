import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Wedding from '../../Wedding';
import InLink from '../../InLink';
import FanPage from '../../FanPage';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    wrapFooter: {
        margin:"0 auto",
        // alignItems:"center",
        // textAlign:"center",
        paddingTop:"30px",
        position:"relative",
        borderTop: "2px solid #d29365"
        // "&:before":{
        //     content:"\"\"",
        //     height:"2px",
        //     background:"gray",
        //     position:"absolute",
        //     top:"0",
        //     width:"100%"
        // }
    },
    boxFooter: {
        display:"flex",
        width: "80vw",
        margin:"0 auto",
        justifyContent:"space-between",
        // alignItems: "center"
    }
  }));

const Footer = () => {

    const classes = useStyles();
    return (
        <div className={classes.wrapFooter}>
            <Grid container spacing={5} className={classes.boxFooter}>
                <Wedding/>
                <InLink />
                <FanPage />
            </Grid>
        </div>
    )
}

export default Footer