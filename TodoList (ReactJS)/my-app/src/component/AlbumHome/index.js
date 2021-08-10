import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    containerAlbum: {
        paddingTop: "50px",
        width: "90vw",
        textAlign: "center",
        margin: "0 auto"
    },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:"30px",
    },
    wrapBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        }
    },
    boxItem: {
        textAlign:"center",
        padding:"10px",
        position:"relative",
        overflow:"hidden",
        width: "30%",
        "&:hover .ok": {
                "& > img": {
                    opacity: "0.8",
                    transform: "scale(1.3)",
                    borderRadius: "25px",
                },
                
        },
        "&:hover .change": {
                background: "#f6cfcac9",
                transition: "0.3s", 
        }

    },
    boxImg: {
        borderRadius:"25px",
        overflow:"hidden",
        "& > img": {
            borderRadius:"25px",
            width: "100%",
            transform: "scale(1)",
            transition: "all 2s ease-in-out",
        },
        // "&:hover > img": {
        //     opacity: "0.8",
        //     transform: "scale(1.3)",
        //     borderRadius: "25px",
        // } 
    },
    boxTitle: {
        display:"inline-block",
        padding:"15px 25px",
        fontSize:"16px",
        fontWeight:"700",
        background:"#ffffff9a",
        borderRadius:"10px",
        position:"absolute",
        left:"50%",
        bottom:"40px",
        transform:"translateX(-50%)",
        zIndex:"1000",
        whiteSpace:"nowrap",
    }

  }));

const AlbumHome = () => {
    
    const classes = useStyles();

    const AlbumHome = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/home-studio.jpg?raw=true",
            title: "Album studio",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/DaNang.jpg?raw=true",
            title: "Album Đà Nẵng",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/HaNoi.jpg?raw=true",
            title: "Album Hà Nội",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/Santory.jpg?raw=true",
            title: "Album phim trường Santory",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/Tam-%C4%91%E1%BA%A3o-8.jpg?raw=true",
            title: "Album Tam Đảo",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/cherry-studio-alibaba-1-23.jpg?raw=true",
            title: "Album phim trường Alibaba",
        },
        
    ]
    return (<div className={classes.containerAlbum}>
                <div className={classes.section}>Album ảnh cưới</div>
                <Grid container spacing={3} className={classes.wrapBox}>
                        {
                            AlbumHome.length && AlbumHome.map((item, index) => {
                                    return ( <>
                                    
                                    <Grid item xs={12} sm={6} md={4} className={classes.boxItem}>
                                            <div className={clsx(classes.boxImg, 'ok')}> 
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={clsx(classes.boxTitle, 'change')}> 
                                                {item.title}
                                            </div>
                                        </Grid>
                                    </>)
                                })
                            }
                </Grid>
            </div>)
}


export default AlbumHome


  