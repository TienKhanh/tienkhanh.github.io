import React from "react"
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    wrapLogo: {
        width: "170px",
        "& > a > img": {
            width: "100%"
        }
    }

  }));

const Logo = () => {
    const classes = useStyles();
    return <div className={classes.wrapLogo}>
                <Link to="/">
                    <img src="https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/logo.PNG?raw=true" alt=""/>
                </Link>
            </div>
}

export default Logo