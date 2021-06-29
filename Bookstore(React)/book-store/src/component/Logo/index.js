import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    wrapLogo: {
        width:"170px",
        "& a":{
            width: "100%",
        },
        "& img":{
            width: "100%"
        }
    }
  }));


const Logo = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerLogo} className={classes.wrapLogo}>
          <Link to="/store">
              <img src="https://tienkhanh.github.io/Bookstore/images/logo/Logo-white-bg.png" alt="" />
          </Link>

        </div>
    )
}


export default Logo