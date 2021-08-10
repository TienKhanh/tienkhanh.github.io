import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from  'clsx';
import {
  Link,
  useLocation
} from "react-router-dom";
import { Drawer } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    activeMenu:{
        color: '#f26a19'
    },
    wrapMenu: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        "& > a > li":{
            paddingLeft:"20px",
            marginLeft:"20px",
            fontFamily:"\"Merriweather\",serif !important",
            letterSpacing:"1.5px",
            fontSize:"16px",
            fontWeight:"600",
            borderLeft:"2px solid #000000",
            // '&:first-child': {
            //     borderLeft: 'none'
            // }
            
        },
        "& > a": {
            textDecoration: "none",
            color: "#000000",
            textTransform: "uppercase",
        },
        "& a:first-child": {
            '& li': {
                borderLeft: "none"
            }
        },
        "@media (max-width : 768px)": {
        display: 'none',
    }
    },
    defaultcolorLi: {
        color: 'black',
    },
    hoverLi: {
        '&:hover': {
            color: '#f26a19'
        }
    },
    defaulList: {
        // padding: '10px 20px',
        listStyle: 'none',
    },
    parentLi: {
        '&:hover > ul': {
            display: 'block',
        }
    },
    subMenu: {
        display: 'none',
    },
    menuBar : {
    
        display: "grid",
        margin :'20px',
        '& a' : {
            color :'black',
            fontSize: "14px", 
            fontWeight: 500,
             marginLeft: "10px" ,
        },
       

        padding : 'inherit',

       
   },
   paper : {
       width : '50%',
    //    height :'90vw',
       top :"50px"
   },
  }));

  

const Menu = ({dataList, isShowBar, closeBar, activeMenu}) => {
    const classes = useStyles();
    let location = useLocation();
    console.log(`location`, location)

    const renderMenu = () => {
        return(
            <>
                {
                    dataList.length && dataList.map((item, index) => {
                        return (
                            <Link to={`${item.link? item.link : ''}`}>
                                <li key={index} className={clsx(classes.hoverLi, classes.defaulList, classes.parentLi, {[classes.activeMenu]: location.pathname === item.link})}>
                                    {item.label}
                                </li>
                            </Link>

                        )
                    })
                }
            </>
        )
    }


    return (
        <div>
            <ul className={classes.wrapMenu}>
                {
                    renderMenu()
                }
            </ul>
            <Drawer classes={{paper:classes.paper}} anchor={'right'} open={isShowBar} onClose={()=> closeBar()}>

            <ul className={classes.menuBar}>
                {
                    renderMenu()
                }
            </ul>
            </Drawer>

        </div>
    )
}

Menu.defaultProps = {
    dataList: []
}

Menu.propTypes = {
    dataList: PropTypes.array.isRequired,
}


export default Menu