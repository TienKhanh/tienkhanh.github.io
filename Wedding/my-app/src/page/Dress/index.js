import React from 'react'
import Header from '../../component/common/Header'
import Footer from '../../component/common/Footer'
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    sectionTitle: {
        backgroundImage:"url(\"https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-bau-troi-dep-sac-net-nhat.jpg\")",
        padding:"50px 0",
        // fontSize: "18px",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        margin: "20px 0"
    },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:"30px",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        },
        "@media (max-width: 1280px)": {
            width: "90%",
            margin: "0 auto"
        },
    },
    title: {
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        },
        "@media (max-width: 1280px)": {
            width: "90%",
            margin: "0 auto"
        },
    },
    wrapItem: {
        display: 'flex',
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "50px",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        },
        "@media (max-width: 1280px)": {
            width: "90%",
            margin: "0 auto"
        },
    },
    boxItem: {
        // width: "24%",
        // padding: "5px",
        padding:"0 ",
        boxShadow:"5px 5px 5px #888, -5px -5px 5px #efefef",
        transform:"scale(0.90)",
        transition:"all 0.4s ease-in-out",
        "&:hover ": {
            transform:"scale(0.95)"
        }
    },
    boxImg: {
        "& > img": {
            width: '100%'
        }
    },
    itemTitle: {
        marginTop:"5px",
        textAlign:"center",
        textTransform:"uppercase",
        fontSize:"18px",
        fontWeight:"bold",
        "&:after ": {
            position:"absolute",
            content:"\"\"",
            backgroundColor:"#fff",
            width:"100%",
            height:"85px",
            right:"0",
            left:"0",
            top:"-30px",
            transform:"skewY(\n5deg\n)",
            zIndex:"-1"
        },
        
    },
    boxTitle: {
        position:"relative",
        padding:"0 20px 20px",
        zIndex: "0",
        backgroundColor:"#fff"
    },
    itemDetail: {
        textAlign: "right",
        // display: "inline-block"
    }
}));

const Dress = () => {
    
    const classes = useStyles();
    
    const ListDress = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Dress/V%C3%A1y%20c%C3%B4ng%20ch%C3%BAa.jpg?raw=true",
            title: 'Váy cưới công chúa',
            price: 800.000,
        },
    ]

    return (
        <>
            <Header/>
            <h1 className={classes.sectionTitle}>Vay cuoi</h1>
            <div className={classes.content}>
                <div className={classes.section}>Váy cưới Luxury </div>
                <div className={classes.title}>VÁY CƯỚI LUXURY là dòng váy cưới cao cấp của Tony Bridal nhằm mang đến những váy cưới thiết kế đẹp hơn dựa trên nền chất liệu nhập ngoại nhưng vẫn theo phong cách tối giản chủ đạo tinh tế và thanh lịch. Những mẫu váy cưới của Tony Bridal bằng các chất liệu phi co giãn 4 chiều, ren nhập ngoại cùng với các chất liệu hỗ trợ nhằm thêm sự nhẹ nhàng và thoải mái cho cô dâu. Bên cạnh đó, dòng váy cưới dáng sẽ được điểm tô đặc sắc hơn với cườm Nhật, pha lê lấp lánh… Tony Bridal vẫn luôn mong muốn mang đến những trải nghiệm hài lòng về dịch vụ may áo cưới từ sự tận tâm vànhiệt tình của cả đội ngũ từ thiết kế, chuyên viên tư vấn đến thợ cắt ráp.</div>
                <div className={classes.contentItem}>
                <Grid containe className={classes.wrapItem}>
                        {
                            ListDress.length && ListDress.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.boxItem}>
                                        <div className={classes.boxImg}>
                                            <img src={item.img}/>
                                        </div>
                                        <div className={classes.boxTitle}>
                                            <div className={classes.itemTitle}> {item.title}</div>
                                                <div className={classes.itemPrice}>
                                                    {item.price}
                                                </div>
                                                <div className={classes.itemDetail}> Xem chi tiet</div>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dress