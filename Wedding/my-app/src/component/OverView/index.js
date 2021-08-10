import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    // comment: {
    //     paddingTop: "50px"
    // },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:"30px",
        fontWeight: "500",
        marginTop: "30px"
    },
    boxHead: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "50px",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        }
    },
    boxHeadItem: {
        textAlign: "center", 
        "&:hover .change": {
            color: "#f26a19"

        },
        padding: "20px"

    },
    boxHeadItemImg: {
        margin: "20px 0",
        "& > img": {
            width: "150px"
        }
    },
    // boxHeadItemTitle: {
    //     "&:hover": {
    //         color: "#f26a19"
    //     }
    // }
    
  }));

const OverView = () => {
    
    const classes = useStyles();

    const OverView = [
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/over-view/gt-1.png?raw=true',
            link: '/gioi-thieu',
            title: "Giới thiệu"
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/over-view/gt-4.png?raw=true',
            link: '/album',
            title: "Album ảnh cưới"
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/over-view/gt-3.png?raw=true',
            link: '/vay-cuoi',
            title: "Váy cưới"
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/over-view/gt-2.png?raw=true',
            link: '/bao-gia',
            title: "Báo giá"
            
        }
    ]
    return <div className={classes.comment}>
                <div className={classes.section}>TỔNG QUAN VỀ ELLY STUDIO</div>
                <Grid container spacing={3} className={classes.boxHead}>
                    {
                        OverView.length && OverView.map((item, index) => {
                                return (
                                    <Grid item xs={6} sm={4} md={3} className={classes.boxHeadItem}>
                                        <Link to={`${item.link? item.link : ''}`}>
                                            <div className={clsx(classes.boxHeadItemImg, 'change')}>
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={clsx(classes.boxHeadItemTitle, 'change')}>{item.title}</div>
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                </Grid>
    </div>
}


export default OverView