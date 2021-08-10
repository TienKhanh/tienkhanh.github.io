import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SeeListCard from '../../SeeListCard';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    wrapBox :{
        background: "#DEFBFD",
        padding: "60px 0",
    },
    sectionHeader: {
        minHeight: "50px",
        padding: ".5rem .9em .7em 1.7em",
        background: "#16445E",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        '& div': {
            color: "#fff",
            fontWeight: "550",
            fontSize: "16px",
            textTransform: "uppercase",
            lineHeight: "1.5",
        }
    },
    reviewBox: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginTop: "60px",
    },
    thumbnail: {
        flexBasis: "30%",
        padding: "20px",
        background: "#fff",
        '& img': {
            maxWidth: '100%',
        }
    },
    reviewInfo:{
        flexBasis: "50%",
        padding: "20px 0",
        position: "relative",
        '& h1':{
            fontSize: "28px",
            textTransform: "uppercase",
            fontWeight: "700",
            marginBottom: "20px",
        }
    },
    authorBox: {
        marginBottom: "30px",
    },
    authorName:{
        fontWeight: 'bold',
    },
    reviewDecs: {
        '& p': {
            color: "#999999",

        }
    },
    readMore: {
        display: "inline-block",
        background: "#FC4B4B",
        padding: "7px 27px",
        color: "#fff",
        borderRadius: "30px",
        boxShadow: '0 0 1px rbg(0 0 0 / 8%)',
        textDecoration: "none",
        fontSize: "13px",
        lineHeight: "1.5",
        transition: '0.3s ease-out',
        textDecoration: "none",
        position: "absolute",
        bottom: "20px",

    },
    reviewScores:{
        flexBasis: '8%',
    },
    bg: {
        background: "#FC4B4B",
        height: "80px",
        width: "80px",
        borderRadius: "50%",
        marginTop: "10px",
        position: "relative",
    },
    scores: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        fontSize: "32px",
        fontFamily: "'Merriweather', serif",
    }

  }));

const ReviewSection = () => {
    const classes = useStyles();
    const data = {
            title: 'STEVE JOBS: MỌI THỨ ĐỀU CÓ THỂ',
            author: 'Trương Vệ Cần',
            url:'/',
            img:'https://tienkhanh.github.io/Bookstore/images/list-books/Steve%20Jobs%20-%20M%E1%BB%8Di%20Th%E1%BB%A9%20%C4%90%E1%BB%81u%20C%C3%B3%20Th%E1%BB%83%20-40-50-20.jpg',
            scores: 9.5,
            description: `Cuốn sách Steve Jobs - Mọi Thứ Đều Có Thể sẽ mang đến cho bạn những trải nghiệm mới mẻ, bài học quý báu qua hành trình cuộc đời cũng như những năm tháng sự nghiệp của Steve Jobs, qua đó giúp bạn khám phá câu chuyện thành công thần kỳ của hãng Apple mà Steve Jobs là biểu tượng tiêu biểu cho sự thành công ấy.
            Cuốn sách Steve Jobs - Mọi Thứ Đều Có Thể sẽ mang đến cho bạn những trải nghiệm mới mẻ, bài học quý báu qua hành trình cuộc đời cũng như những năm tháng sự nghiệp của Steve Jobs, qua đó giúp bạn khám phá câu chuyện thành công thần kỳ của hãng Apple mà Steve Jobs là biểu tượng tiêu biểu cho sự thành công ấy.`,
        }
    return (
        <div className={classes.wrapBox}>
            <Container maxWidth='lg'>
                <div className={classes.sectionHeader}>
                    <div className={classes.title}>Review sách</div>
                </div>
                <div className={classes.reviewBox}>

                    <div className={classes.thumbnail}>
                        <img src={data.img}/>
                    </div>

                    <div className={classes.reviewInfo}>
                        <h1>{data.title}</h1>
                        <div className={classes.authorBox}>
                            <span>Tác giả:</span>
                            <span className={classes.authorName}>{data.author}</span>
                        </div>
                        <div className={classes.reviewDecs}>
                            <p>{data.description}</p>
                        </div>
                        <Link to={data.url} className={classes.readMore}>Đọc tiếp</Link>
                    </div>

                    <div className={classes.reviewScores}>
                        <div className={classes.bg}>
                            <div className={classes.scores}>{data.scores}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ReviewSection