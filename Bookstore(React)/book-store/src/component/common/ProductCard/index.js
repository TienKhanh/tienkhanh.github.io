import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    wrapCard : {
        display: 'flex',
        justifyContent:'space-around'
    },
    wrapItem: {
        flexBasis : '20%',
        '& img': {
            width: '100%',
        }
    }
  }));

const ProductCard = () => {
    const classes = useStyles();
    const dataCard = [
        {
            title: 'Khởi nghiệp 4.0',
            img: 'https://tienkhanh.github.io/Bookstore/images/bestseller/Kh%E1%BB%9Fi%20nghi%E1%BB%87p%204.0%20-%20108-139-22.jpg',
            price: 120000,
            bestseller: true,
            rating: 4
        },
        {
            title: 'Năng lực tìm kiếm',
            img: 'https://tienkhanh.github.io/Bookstore/images/bestseller/N%C4%83ng%20l%E1%BB%B1c%20t%C3%ACm%20ki%E1%BA%BFm%20-72-91-20.jpg',
            price: 100000,
            bestseller: true,
            rating: 5
        },
        {
            title: 'Siêu trí nhớ',
            img: 'https://tienkhanh.github.io/Bookstore/images/bestseller/Si%C3%AAu%20tr%C3%AD%20nh%E1%BB%9B%20-74-99-25.jpg',
            price: 80000,
            bestseller: false,
            rating: 3
        },
    ]
    const renderProductCard = () => {
        return (
            <>
              {dataCard.length &&
                dataCard.map((item, index) => {
                  return <div className={classes.wrapItem}>
                    <img alt="" src={item.img}/>
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                    {item.bestseller ? <span>BESTSELLER</span> : ""}
                    <Rating
                        name="customized-empty"
                        defaultValue={item.rating}
                        precision={0.5}
                        // emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                  </div>
                    
                  
                })}
            </>
          );
    }

    return (
        <div className={classes.wrapCard}>
            {
                renderProductCard()
            }
        </div>
    )
}

export default ProductCard