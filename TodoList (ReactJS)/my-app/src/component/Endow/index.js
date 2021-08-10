import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    item: {
        paddingTop: "50px"
    },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        margin:"30px 0"
    },
    boxItem: {
        display: "flex",
        justifyContent: "center",
        "@media (min-width: 1280px)": {
            width: "80%",
        }
    },
    wrapBox: {
        display: "flex",
        flexWrap: "wrap",
        // width: "1140px",
        // margin: "0 auto",
        justifyContent: "space-around",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        }
    },
    boxImg: {
        width:"30%",
        display:"flex",
        margin:"15px 0",
        alignItems:"center",
        justifyContent:"flex-end",
        "& > img": {
            width: "85%"
        }
    },
    boxDes: {
        width:"68%",
        display:"inline-block",
        border:"1px solid #e9cdc5",
        borderLeft:"navajowhite",
        borderRadius:"15px",
        margin:"15px 0",
        paddingLeft:"15px",
    },
    desTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "10px 0 5px 0",
    },
    desSub: {
        overflow:"hidden",
        textOverflow:"ellipsis",
        WebkitLineClamp:"3",
        WebkitBoxOrient:"vertical",
        fontSize:"16px",
        textAlign:"justify",
        marginBottom:"15px",
        fontFamily:"'googlesan'",
        paddingRight:"10px"
    },
    center: {
        display: "flex",
        justifyContent: "center"
    }
    
  }));

const Endow = () => {
    
    const classes = useStyles();

    const Endow = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-1.png?raw=true",
            title: "Make up",
            sub: "Đội ngũ make - up tay nghề cao, khả năng “biến hóa” đỉnh cao, luôn cập nhật những xu hướng trang điểm mới nhất sẽ giúp cô dâu trở nên rạng rỡ và xinh đẹp."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-2.png?raw=true",
            title: "Nhiếp ảnh gia",
            sub: "Đội ngũ nhiếp ảnh gia sở hữu nhiều năm kinh nghiệm, kỹ thuật chụp ảnh bậc thầy, bắt khoảnh khắc cực tốt chắc chắn sẽ mang đến những bộ ảnh hoàn mỹ."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-3.png?raw=true",
            title: "Dịch vụ hoàn hảo",
            sub: "Chất ảnh riêng biệt, độc đáo. Ê kíp chu đáo, tận tâm. Giá thành bình ổn, phù hợp. Đó chính là điều làm nên sự hoàn hảo cho dịch vụ của ELLY."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-4.png?raw=true",
            title: "Trải nghiệm tuyệt vời",
            sub: "Tất cả khách hàng đều hài lòng về trải nghiệm tại ELLY WEDDING bởi cung cách phục vụ nhiệt tình, chuyên nghiệp và sản phẩm chất lượng cao."
        },
        
    ]
    return <div className={classes.item}>
            <div className={classes.section}>ĐẾN VỚI ELLY STUDIO BẠN SẼ ĐƯỢC NHỮNG GÌ?</div>
            <Grid container  className={classes.wrapBox}>
                    {
                        Endow.length && Endow.map((item, index) => {
                                return ( <>
                                
                                    <Grid item xs={12} sm={6} classes={{root:classes.center}}>
                                        <div  className={classes.boxItem}>
                                            <div className={classes.boxImg}> 
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={classes.boxDes}> 
                                                <div className={classes.desTitle}>{item.title}</div>
                                                <div className={classes.desSub}>{item.sub}</div>
                                            </div>
                                        </div>
                                    </Grid>
                                </>)
                            })
                        }
            </Grid>
    </div>
}


export default Endow