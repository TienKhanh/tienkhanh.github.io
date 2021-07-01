import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({

  }));

const BannerStore = () => {
    const classes = useStyles();
    const dataList = [
        {
            title: 'Sách kinh tế',
            linkImg: 'https://tienkhanh.github.io/Bookstore/images/slider/category-slider-1.png'
        },
        // {
        //     title: 'Sách trong nước',
        //     linkImg: 'https://tienkhanh.github.io/Bookstore/images/slider/category-slider-1.png'
        // },
        
    ]
    return (
        <div>
              {dataList.length &&
                dataList.map((item, index) => {
                  return <>
                    <h1>{item.title}</h1>
                    <img src={item.linkImg} alt=""/>
                  </>
                })}
            </div>
    )
}

export default BannerStore