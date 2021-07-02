import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import FeaturedCard from '../../FeaturedCard';

const useStyles = makeStyles((theme) => ({
    wrapBox :{
        background: '#eeeeee',
        paddingBottom: '80px',
    },
    container: {
        justifyContent: 'space-between',
        display: 'flex',
    }
  }));

const Featured = () => {
    const classes = useStyles();
    const dataFeatured = [
        {
            icon: "fas fa-shipping-fast",
            title: 'Vận chuyển miễn phí',
            description: 'Toàn quốc - Chỉ từ 200k',
            url:'/'
        },
        {
            icon: "fas fa-money-check-alt",
            title: 'Thanh toán',
            description: 'An toàn, tiện lợi',
            url:'/'
        },
        {
            icon: "fas fa-book",
            title: 'Sách thật',
            description: 'Sách giả - Hoàn 111%',
            url:'/'
        },
        {
            icon: "fas fa-tags",
            title: 'Ưu đãi hàng tháng',
            description: 'Săn Coupon - Quà tặng',
            url:'/'
        },
        
    ]
    return (
        <div className={classes.wrapBox}>
            <Container maxWidth='lg' className={classes.container}>
            {
                dataFeatured.map((item, index) => <FeaturedCard key={index} data={item}/>)
            }
            </Container>
        </div>
    )
}

export default Featured