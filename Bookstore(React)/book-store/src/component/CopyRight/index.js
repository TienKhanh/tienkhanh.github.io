import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Container } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    wrapCopyRight:{
        fontSize: "12px",
        color: "#ccc",
        padding: "10px 0",
        background: "#0d0d0d",
    },
    wrapFlex:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    copyRight:{
        textAlign: 'left',
        flex: "0 0 50%",
        maxWidth: "50%",
        position: 'relative',
        width: '100%',
    },
    footerMenu : {
        textAlign: "right",
        flex: "0 0 50%",
        maxWidth: "50%",
        position: "relative",
        width: "100%",
        listStyleType: "none",
        margin: "0",
        "& li":{
            display: 'inline-block'
        },
        "& li a":{
            display: "inline-block",
            color: "#ccc",
            fontSize: "13px",
            marginLeft: "15px",
            transition: 'all 0.4s ease',
        },
        "& li a:hover" : {
            color: '#f26a19'
        }
    }
    

  }));

const CopyRight = ({dataFooterMenu}) => {

    const classes = useStyles();

    return (
        <div className={classes.wrapCopyRight}>          
            <Container maxWidth="lg">
                <div className={classes.wrapFlex}>
                    <div className={classes.copyRight}>
                        © Liên hệ hỗ trợ: vnbookteam@gmail.com
                    </div>
                    <ul className={classes.footerMenu}>
                        {
                            dataFooterMenu.map((item,index)=>{
                                return <li>
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default CopyRight