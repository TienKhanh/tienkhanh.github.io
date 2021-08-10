import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    item: {
        paddingRight: "40px"
    },
    section: {
        textTransform:"uppercase",
        fontWeight:"600",
        fontSize:"18px",
        position:"relative",
        display:"inline-block",
        paddingBottom:"5px",
        "&:after": {
            content:"\"\"",
            width:"40px",
            height:"3px",
            background:"#f1ded0",
            position:"absolute",
            bottom:"0",
            left:"0"
        }
    },
    boxItem: {
        padding: "0",
        '& > li':{
            listStyle: "none",
        },
        
    },
    itemTitle: {
        justifyContent:"center",
        position:"relative",
        paddingLeft:"25px",
        padding:"10px 0",
        borderBottom: "1px dashed",
        borderColor: "rgba(51, 51, 51, 0.102)",
        "& > a > i": {
            position: "absolute",
            left: "0",
            color: "#80808040",
            paddingTop: "2px"
        },
        "&:hover > a": {
            color: "#f26a19"
        }
    }
    
  }));

const InLink = () => {
    
    const classes = useStyles();

    const InLink = [
        {
            icon: "fas fa-chevron-right",
            title: "Ảnh viện áo cưới",
            link: "/album"
        },
        {
            icon: "fas fa-chevron-right",
            title: "Giá chụp ảnh cưới",
            link: "/bao-gia"
        },
        {
            icon: "fas fa-chevron-right",
            title: "Dịch vụ chụp ảnh cưới",
            link: "/album"
        },
        {
            icon: "fas fa-chevron-right",
            title: "Thuê áo cưới",
            link: "/album"
        },
        {
            icon: "fas fa-chevron-right",
            title: "Giới thiệu",
            link: "/album"
        },
        
    ]
    return <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
            <div className={classes.section}>Liên kết hữu ích</div>
            <ul className={classes.boxItem}>
                {
                    InLink.length && InLink.map((item, index) => {
                            return (
                                <li className={classes.itemTitle}>
                                    <Link to={item.link}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
            </ul>
    </Grid>
}


export default InLink