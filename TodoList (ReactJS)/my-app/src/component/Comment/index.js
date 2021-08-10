import React from "react"
import { Link } from "react-router-dom";
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
        marginBottom:"30px",
        fontWeight: "500",
        marginTop: "30px"
    },
    wrapComment: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "50px",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        },
        padding: "0 50px"
    },
    commentItem: {
        width: "90%",
        textAlign: "center", 
        padding: "20px 20px",
  
    },
    commentImg: {
        "& > img": {
            width: "150px",
            width: "150px",
            borderRadius: "100px",
        }
    },
    commentTitle: {
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: "600",
    },
    commentSubTitle: {
        
    textAlign: "justify"
    }
    
  }));

const Comment = () => {
    
    const classes = useStyles();

    const Comment = [
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Comment/39900495_2187804601294710_8118125377903132672_o-684x1024.jpg?raw=true',
            title: "Nguyễn Thúy Quỳnh - Hà Nội",
            subtitle: 'V/c mình rất hài lòng khi đến với Elly. Các bạn makeup và chụp ảnh rất nhiệt tình và chu đáo. V/c mình cảm ơn a Tiên và e Li đã tạo ra những bức ảnh đẹp và tuyệt vời cho v/c mình!',
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Comment/anh-chan-dung.jpg?raw=true',
            title: "Thùy Trinh - Hà Nội",
            subtitle: 'Trải nghiệm tuyệt vời, nhân viên của ảnh viện cực kỳ dễ thương, nhiệt tình và thân thiện. Bộ ảnh phố cổ vô cùng ấn tượng và đẹp không có gì để chê.',
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Comment/chan%20dung.jpg?raw=true',
            title: "Mai Anh - Tam Đảo",
            subtitle: 'Chất lượng tuyệt vời, phục vụ rất chuyên nghiệp. cảm ơn ảnh viện Elly.',
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Comment/lua-chon-trang-phuc-chup-anh-cuoi-.jpg?raw=true',
            title: "Hoàng Dung - Đông Anh",
            subtitle: 'Ảnh cưới của vợ chồng em rất đẹp,rất hài lòng luôn ạ. Cảm ơn team Elly đã giúp vợ chồng em có 1 album đẹp trên cả sự mong đợi.',
            
        }
    ]
    return <div className={classes.item}>
            <div className={classes.section}>TRẢI NGHIỆM KHÁCH HÀNG</div>
            <Grid container spacing={3} className={classes.wrapComment}>
                {
                    Comment.length && Comment.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} lg={3} classes={{root:classes.center}}>
                                    <div className={classes.commentItem}>
                                            <div className={classes.commentImg}>
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={classes.commentTitle}>{item.title}</div>
                                            <div className={classes.commentSubTitle}>{item.subtitle}</div>

                                    </div>
                                </Grid>
                            )
                        })
                    }
            </Grid>
    </div>
}


export default Comment