import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SeeListCard from '../../SeeListCard';

const useStyles = makeStyles((theme) => ({
    wrapBox :{
        background: '#eeeeee',
        paddingBottom: '80px',
    },
    container: {
        justifyContent: 'space-between',
        display: 'flex',
        textAlign: 'center',
    }
  }));

const SeeList = () => {
    const classes = useStyles();
    const dataFeatured = [
        {
            title: 'Sách trong nước',
            url:'/',
            img:'https://tienkhanh.github.io/Bookstore/images/see-list/banner-01.jpg',
        },
        {
            title: 'Sách nước ngoài',
            url:'/',
            img:'https://tienkhanh.github.io/Bookstore/images/see-list/banner-02.jpg',
        },
        
    ]
    return (
        <div className={classes.wrapBox}>
            <Container maxWidth='lg' className={classes.container}>
            {
                dataFeatured.map((item, index) => <SeeListCard key={index} data={item}/>)
            }
            </Container>
        </div>
    )
}

export default SeeList