import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    breadcrumb: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '.75rem 0',
        listStyle: 'none',
        margin: 0,
    },
    breadcrumbItem: {
        '& a':{
            color: '#999',
        },
        '&:after':{
            // display: "inline-block",
            // paddingRight: ".5rem",
            // color: "#999",
            // fontFamily: "Font Awesome 5 Free",
            // fontWeight: "900",
            content: '>',
            fontSize: 11,
            width: 10,
            height: 10,
            
        }
    }
  }));

const BreadCrumb = () => {
    const classes = useStyles();
    const dataBreadCrumb = [
        {
            title: 'Trang chủ',
            linkItem: '/'
        },
        {
            title: 'Sách trong nước',
            linkItem: '/store'
        },
        {
            title: 'Sách kinh tế',
            linkItem: null
        },
    ]
    const renderBreadCrumb = () => {
        return (
        <React.Fragment>
              {dataBreadCrumb.length && dataBreadCrumb.map((item, index) => {
                    var check = dataBreadCrumb.length - 1 === index;
                    console.log(check)
                    return <li className={clsx(classes.breadcrumbItem, check && classes.active)}>
                        <Link to={`${item.linkItem ? item.linkItem : ""}`}>{item.title}</Link>
                    </li>
                })}
          </React.Fragment>  
          );
    }

    return (
        <Container>
            
                <ol className={classes.breadcrumb}>
                        {renderBreadCrumb()}
                </ol>
            
        </Container>
    )
}

export default BreadCrumb