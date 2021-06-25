import React from 'react'
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from  'clsx';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    wrapMenu: {
        display: 'flex',
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
        padding: '10px 20px',
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
  }));


const Menu = ({dataList}) => {
    const classes = useStyles();


    const renderSubmenu = (list) => {
        return (
            <>
            {
                list.map((item, index) => {
                    return <Link to={`${item.link? item.link : ''}`}>
                        <li key={index} className={clsx(classes.hoverLi, classes.defaultcolorLi, classes.defaulList)}> {item.label} </li>
                    </Link>
                })
            }
            </>
        )
    }

    const renderMenu = () => {
        return(
            <>
                {
                    dataList.length && dataList.map((item, index) => {
                        return (
                            <Link to={`${item.link? item.link : ''}`}>
                                <li key={index} className={clsx(classes.hoverLi, classes.defaulList, classes.parentLi)}>
                                    {item.label}
                                    {
                                        item.childres && item.childres.length && <ul className={classes.subMenu}>
                                            {
                                                renderSubmenu(item.childres)
                                            }
                                        </ul>
                                    }
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