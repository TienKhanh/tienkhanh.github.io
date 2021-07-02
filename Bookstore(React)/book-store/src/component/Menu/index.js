import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const useStyles = makeStyles((theme) => ({
  menuBox: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
  },
  wrapMenu: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    "& > li" : {
      lineHeight: '60px',
      margin: '0 15px',
      position: 'relative',
    },
    "& > li:hover > a" : {
      color: '#f26a19',
    },
    "& > li:hover > div" : {
      display: 'block',
    },
    "& > li > a" : {
      display: 'inline-block',
      textTransform: 'uppercase',
      fontFamily: "'Open Sans',arial,sans-serif",
      color: '#121212',
      fontSize: '14px',
      fontWeight: '700',
      whiteSpace: 'nowrap',
    },
  },
  subMenu : {
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: '1000',
    display: 'none',
    float: 'left',
    minWidth: '10rem',
    padding: '.5rem 0',
    margin: '.1rem 0 0',
    fontSize: '1rem',
    color: '#212529',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '0!important',
    lineHeight: 'normal',
  },
  subItem : {
    display: 'block',
    width: '100%',
    padding: '.25rem 1.5rem',
    clear: 'both',
    fontWeight: '400',
    color: '#212529',
    whiteSpace: 'nowrap',
    border: '0',
    transition: '0.2s',
    "&:hover": {
      color: '#f26a19',
    }
  },
  subDivider : {
    height: '0',
    margin: '.5rem 0',
    overflow: 'hidden',
    borderTop: '1px solid #e9ecef',
  },
  

}));

const Menu = ({ dataList }) => {
  const classes = useStyles();

  const renderSubmenu = (list) => {
    return (
      <>
        {list.map((item, index) => {
          if( index + 1 == list.length) {
            return (
              <Link to={`${item.link ? item.link : ""}`}  className={classes.subItem}> {item.label} </Link>
          );
          }
          return (
              <>
              <Link to={`${item.link ? item.link : ""}`}  className={classes.subItem}> 
                {item.label} 
              </Link>
              <div className={classes.subDivider}></div>
              </>
          );
        })}
      </>
    );
  };

  const renderMenu = () => {
    return (
      <>
        {dataList.length &&
          dataList.map((item, index) => {
            return (
              <li key={index} className={classes.bookCategory}>
                <Link to={`${item.link ? item.link : ""}`} className={classes.categoryName}>
                  {item.label}
                  </Link>
                {item.childrens && item.childrens.length && (
                    <div className={classes.subMenu}>
                      {renderSubmenu(item.childrens)}
                    </div>
                )}
              </li>
            );
          })}
      </>
    );
  };

  return (
    <div className={classes.menuBox}>
      <ul className={classes.wrapMenu}>{renderMenu()}</ul>
    </div>
  );
};

Menu.defaultProps = {
  dataList: [],
};

Menu.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default Menu;
