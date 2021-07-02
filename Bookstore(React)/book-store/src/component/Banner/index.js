import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    Carousel : {
        "indicators" : {
            display:'none'
        }
    },
    wrapBox : {
        background: '#eeeeee',
        paddingBottom: '80px',
    }
    
  
}));
function Banner(props){
    const classes = useStyles();
    var items = [
        {
            id: 1,
            img: "https://tienkhanh.github.io/Bookstore/images/slider/Slider%201.png"
        },
        {
            id: 2,
            img: "https://tienkhanh.github.io/Bookstore/images/slider/Slider%202.png"
        },
        {
            id: 3,
            img: "https://tienkhanh.github.io/Bookstore/images/slider/Slider%203.png"
        }
    ]

    return (
        <div className={classes.wrapBox}>
            <Container>
                <Carousel>
                    {
                    items.map( (item, index) => {
                        return (
                            <Link to="/">
                                <img key={index} src={item.img} alt="" /> 
                            </Link>
                        )
                        
                    })
                    }
                </Carousel>
            </Container>
        </div>   
    )
}
export default Banner;