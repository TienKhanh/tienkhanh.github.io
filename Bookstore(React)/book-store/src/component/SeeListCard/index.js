import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    cardInfo: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",        
        '& h1' : {
            fontSize: "2.1em",
            marginBottom: "30px",
        },
        '& a' : {
            fontFamily: "Arial, Helvetica, sans-serif",
            display: "inline-block",
            padding: "7px 27px",
            color: "#34495e",
            borderRadius: "30px",
            textDecoration: "none",
            fontSize: "13px",
            lineHeight: "1.5",
            textDecoration: "none",  
            boxShadow: '0 0 1px rgb(0 0 0 / 8%)',
            transition: '0.3s ease-out',
            border: '1px solid #8e9eae',
        },
        '& a:hover':{
            background: '#34495e',
            color: '#fff',
        }
    },
}));



const SeeListCard = ({data}) => {
    const classes = useStyles();
    const cardBox = {
        backgroundImage:`url(${data.img})`,
        backgroundSize: "cover",
        flexBasis: "48%",
        height: "200px",
        position: 'relative',
        boxShadow: '0 0 20px 0 rgb(0 0 0 / 10%)'
    }
    return (
        <div className={classes.cardBox} style={cardBox}>
            <div className={classes.cardInfo}>
                <h1>{data.title}</h1>
                <Link to={data.url} >Xem ngay</Link>
            </div>
        </div>
    )
}

export default SeeListCard