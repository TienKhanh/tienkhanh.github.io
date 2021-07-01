import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
  
}));

const Login = ({ dataList }) => {
  const classes = useStyles();

  return (
      <div className={classes.wrapUser}>

        <div className={classes.userLogin}>
          <Link to="/">Đăng nhập</Link>
        </div>

        <div className={classes.cartBox}>
          <div className={classes.cartLogo}>
            <Link to="/">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </div>
          <span className={classes.orderNumber}>0</span>
        </div>

      </div>
  );
};

export default Login;
