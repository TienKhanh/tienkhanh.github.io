import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        "& > img": {
            width: "100vw",
            height: "40vw"
        },
        "@media (max-width : 768px)": {
            display: 'none',
        },
        paddingBottom: "30px"
    }
  }));

const Banner = () => {

    const classes = useStyles();

    return <div className={classes.banner} >
        <img src="http://demo104.network.woww.co.za/wp-content/uploads/sites/120/2015/05/set1-love-1500x630.jpg" alt=""/>
    </div>
}

export default Banner