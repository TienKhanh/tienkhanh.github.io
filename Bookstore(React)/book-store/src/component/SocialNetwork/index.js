import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    wrapSocial:{
        padding: '26px 0',
        background: '#222',
    },
    container:{
        padding: '0px 80px',
    },
    wrapFlex:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        flex: '0 0 16.666667%',
        maxWidth: '16.666667%',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        '& > a > i':{
            width: 40,
            height: 40,
            lineHeight: '40px',
            fontSize: 15,
            background: '#ffffff08',
            borderRadius: '50%',
            color: '#fff',
            transition: 'all 0.4s ease',
            textAlign: 'center',
        },
        '&:nth-child(1):hover a i, &:nth-child(1):hover a span' : {color: '#166fe5'},
        '&:nth-child(2):hover a i, &:nth-child(2):hover a span' : {color: '#d64a72'},
        '&:nth-child(3):hover a i, &:nth-child(3):hover a span' : {color: '#006097'},
        '&:nth-child(4):hover a i, &:nth-child(4):hover a span' : {color: '#bd081c'},
        '&:nth-child(5):hover a i, &:nth-child(5):hover a span' : {color: '#ff4500'},
        '&:nth-child(6):hover a i, &:nth-child(6):hover a span' : {color: '#08a0e9'},
    },
    socialName:{
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 13,
        marginLeft: 10,
        transition: 'all 0.4s ease',
        userSelect: 'none',
    }

  }));

const SocialNetwork = ({dataSocial}) => {

    const classes = useStyles();

    

    return (
        <div className={classes.wrapSocial}>          
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.wrapFlex}>
                    {dataSocial.map((item,index) => {
                        return (
                            <div className = {classes.item} key={index}>
                            <Link to="/">
                                <i class={item.icon}></i>
                                <span className={classes.socialName}>{item.name}</span>
                            </Link>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default SocialNetwork