import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    cardBox : {
        flexBasis: "23%",
        color: "#121212",
        background: "#fff",
        padding: "20px 15px",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        boxSizing: "border-box",
        '&:hover': {
            color: '#f26a19',
        }
    },
    cardIcon : {
        fontSize: "27px",
        marginRight: "10px",
        background: "#e4e4e4",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        position: "relative",
        color: "#f26a19",
        "& i" : {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
    },
    cardInfo: {
        textAlign:'left',
    },
    title : {
        fontSize: 16,
        fontWeight: 'bold',
    }, 
    description : {
        fontSize: 13,
    }

  }));

const FeaturedCard = ({data}) => {
    const classes = useStyles();
    return (
        <Link to={data.url} className={classes.cardBox}>
            <div className={classes.cardIcon}>
                <i class={data.icon}></i>
            </div>
            <div className={classes.cardInfo}>
                <div className={classes.title}>{data.title}</div>
                <div className={classes.description}>{data.description}</div>
            </div>
        </Link>
    )
}

export default FeaturedCard