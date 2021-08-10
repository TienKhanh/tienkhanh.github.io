import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  wrapAlbumDetail: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "50px",
    width: "90vw",
    margin: "0 auto",
  },
  boxItem: {
    width: "24%",
    padding: "5px",
    marginBottom: "20px",
  },
  boxImg: {
    "& > img": {
      width: "100%",
    },
  },
  title : {
      textAlign: 'center'
  }
}));

const AlbumDetail = () => {
  const classes = useStyles();
  const [myId, setMyId] = useState("");

  useEffect(() => {
    var url = window.location.href;
    var myArr = url.split("/");
    setMyId(myArr[myArr.length - 1]);
  }, [])

  const AlbumDetail = [
    {
      cat: "bavi",
      title: "Ba Vì",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",]
    },
    {
      cat: "danang",
      title: "Đà Nẵng",
      dataImg: ["https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true"]
    },
    {
      cat: "hanoi",
      title: "Hà Nội",
      dataImg: ["https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true"]
    },
    {
      cat: "alibaba",
      title: "Phim trường Alibaba",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      ]
    },
    {
      cat: "santorini",
      title: "Phim trường Santorini",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      ]
    },
    {
      cat: "smile",
      title: "Phim trường Smile",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/kinh-nghiem-chup-anh-cuoi-da-nang-hoi-an-lang-co.jpg",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/chup%20anh%20cuoi%20ha%20noi.jpg"
      ]
    },
    {
      cat: "studio",
      title: "Studio",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/kinh-nghiem-chup-anh-cuoi-da-nang-hoi-an-lang-co.jpg",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/chup%20anh%20cuoi%20ha%20noi.jpg"
      ]
    },
    {
      cat: "tamdao",
      title: "Tam Đảo",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/kinh-nghiem-chup-anh-cuoi-da-nang-hoi-an-lang-co.jpg",
        "https://raw.githubusercontent.com/tienkhoa96/tienkhoa96.github.io/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/chup%20anh%20cuoi%20ha%20noi.jpg"
      ]
    },
  ];

  return (
    <>
      <Header />
        {AlbumDetail.length && AlbumDetail.map((item, index) => {
            if (item.cat == myId) {
              return (
                  <>
                    <h1 className={classes.title}>Album chụp ảnh cưới {item.title}</h1>
                    <div className={classes.wrapAlbumDetail}>
                    {
                        item.dataImg.map((img, index) => {
                            return(
                                <>
                                <div className={classes.boxItem}>
                                <div className={classes.boxImg}>
                                    <img src={img} />
                                </div>
                                </div>
                                </>
                            )
                        })
                    }
                    </div>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default AlbumDetail;
