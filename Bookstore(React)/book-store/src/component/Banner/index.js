import React from 'react';
import {Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const useStyles = makeStyles((theme) => ({
    Carousel : {
        "indicators" : {
            display:'none'
        }
    },
    wrapBox : {
        background: '#eeeeee',
        paddingBottom: '80px',
    },
    wrapImg: {
        minWidth: '100%',
    }
  
}));
function Banner(props){
    const classes = useStyles();
    var slideImages = [
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
    const bird = {
        size: "small"
      };
      
      const mouse = {
        name: "Mickey",
        small: true
      };
    console.log(mouse.bird.size)      
    console.log(mouse[bird.size])      
    console.log(mouse.bird.size)      

    
    return (
        <div className={classes.wrapBox}>
            <Container>
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                    <img src={slideImage.img} className={classes.wrapImg}/>
                </div>
               
            ))} 
            </Slide>
            </Container>
        </div>   
    )
}
export default Banner;