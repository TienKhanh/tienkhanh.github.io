import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import Header from '../../component/common/Header';
import Footer from '../../component/common/Footer';
const useStyles = makeStyles((theme) => ({
    wrapAlbumDetail: {
        display: 'flex',
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "50px",
        width: "90vw",
        margin: '0 auto'
    },
    boxItem: {
        width: "24%",
        padding: "5px",
        marginBottom: "20px"
    },
    boxImg: {
        "& > img": {
            width: '100%'
        }
    }
  }));
  
const AlbumDetail = () => {
    const classes = useStyles();
    var myId = ""
    useEffect(() => {
        var url = window.location.href
        // console.log("url", url)
        const myArr = url.split("/")
        myId = myArr[myArr.length-1]
        // console.log("myId", myId)
    }, [])

    
    const AlbumDetail = [
        {   
            cat: "danang",
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
    ]


    return (<>
            <Header />
            <div className={classes.wrapAlbumDetail}>
                <div className={classes.section}>Album chup anh cuoi ba vi</div>
                {
                    AlbumDetail.length && AlbumDetail.map((item, index) => {
                        
                            
                                // {item.cat == myId {
                                        
                                //         <div className={classes.boxItem}>
                                //         <div className={classes.boxImg}>
                                //             <img src={item.img}/>
                                //         </div>
                                //         </div>
                                        
                                //     }
                                // }
                            return (myId);
                            
                        
                    })
                }
            </div>
            <Footer />
            </>
    )
}



export default AlbumDetail