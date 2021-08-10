import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    item: {
        padding: "50px"
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
        }
    },
    itemTitle: {
        justifyContent:"center",
        position:"relative",
        paddingLeft:"25px",
        padding:"10px 0",
        borderBottom: "1px dashed",
        borderColor: "rgba(51, 51, 51, 0.102)",
        "& > i": {
            position: "absolute",
            left: "0",
            color: "#d29365",
            paddingTop: "2px"
        }
        
    }
    
  }));

const Wedding = () => {
    
    const classes = useStyles();

    const Wedding = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Địa chỉ: Số 48 Tố Hữu, Trung Văn, Từ Liêm, Hà Nội"
        },
        {
            icon: "fas fa-phone-alt",
            title: "Số điện thoại: 0975 225 409"
        },
        {
            icon: "fas fa-globe-americas",
            title: "Website: www.ellystudio.com"
        },
        {
            icon: "fas fa-envelope-open-text",
            title: "Email: ellystudio@gmail.com"
        },
        {
            icon: "far fa-clock",
            title: "Giờ mở cửa: 8h30 đến 21h30 từ thứ 2 đến Chủ nhật"
        },
        
    ]
    return <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
            <div className={classes.section}>Elly studio</div>
            <ul className={classes.boxItem}>
                {
                    Wedding.length && Wedding.map((item, index) => {
                            return (
                                <li className={classes.itemTitle}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </li>
                            )
                        })
                    }
            </ul>
    </Grid>
}


export default Wedding