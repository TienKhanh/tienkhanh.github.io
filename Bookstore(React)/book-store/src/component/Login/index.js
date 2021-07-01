import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  
  wrapUser:{
    display: 'flex',
    flexBasis: 135,
    justifyContent: 'flex-end',
  },
  userLogin: {
    '& > a':{
      display: 'inline-block',
      padding: '5px 13px',
      border: '1px solid #666666',
      color: '#000',
      borderRadius: 3,
      background: 'linear-gradient(to left, #fff 50%, #000 50%) right',
      backgroundSize: '200%',
      transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    },
    '&:hover > a':{
      backgroundPosition: 'left',
      color: '#fff',
    }
  },
  cartBox : {
    padding: '5px 7px 5px 10px',
    position: 'relative',
  },

  cartLogo : {
      "& > a > i":{
        fontSize: 18,
        color: '#212529',
        cursor: 'pointer',
      },
      "& > a > i:hover":{
        color: '#f26a19',
      }
  },
  orderNumber: {
    position: "absolute",
    top: "-6px",
    right: "-2px",
    background: "#FC4B4B",
    color: "#FFF",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "16px",
    fontSize: "12px",
  }

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
