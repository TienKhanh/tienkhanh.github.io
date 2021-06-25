import React, { useState, useEffect } from "react";
import "./App.css";
import CardImage from "./component/CardImage";

const App = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "http://img4.uploadhouse.com/fileuploads/17699/176992601ca0f28ba4a8f7b41f99ee026d7aaed8.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 2,
      src: "http://img3.uploadhouse.com/fileuploads/17699/17699259cb2d70c6882adc285ab8d519658b5dd7.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 3,
      src: "http://img9.uploadhouse.com/fileuploads/17699/176992568b759acd78f7cbe98b6e4a7baa90e717.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 4,
      src: "http://img6.uploadhouse.com/fileuploads/17699/17699262833250fa3063b708c41042005fda437d.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 5,
      src: "http://img2.uploadhouse.com/fileuploads/17699/1769925824ea93cbb77ba9e95c1a4cec7f89b80c.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 1,
      src: "http://img4.uploadhouse.com/fileuploads/17699/176992601ca0f28ba4a8f7b41f99ee026d7aaed8.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 2,
      src: "http://img3.uploadhouse.com/fileuploads/17699/17699259cb2d70c6882adc285ab8d519658b5dd7.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 3,
      src: "http://img9.uploadhouse.com/fileuploads/17699/176992568b759acd78f7cbe98b6e4a7baa90e717.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 4,
      src: "http://img6.uploadhouse.com/fileuploads/17699/17699262833250fa3063b708c41042005fda437d.png",
      isShow: false,
      isDelete: false,
    },
    {
      id: 5,
      src: "http://img2.uploadhouse.com/fileuploads/17699/1769925824ea93cbb77ba9e95c1a4cec7f89b80c.png",
      isShow: false,
      isDelete: false,
    },
  ]);
  const [ids, setIds] = useState([]);
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(5)

  useEffect(() => {
    if (ids.length === 2) {
      // bat dau so sanh 2 id trong mang
      let newImages = [...images];
      if (ids[0] !== ids[1]) {
        // up 2 la bai lai.

        newImages.forEach((it) => {
          if (it.id === ids[0] || it.id === ids[1]) {
            it.isShow = false;
          }
        });
        setTimeout(() => {
          setImages(newImages);
          setIds([]);
        }, 2000);
      } else {
        // xoa 2 la bai di
        newImages.forEach((it) => {
          if (it.id === ids[0]) {
            it.isDelete = true;
          }
        });
        setTimeout(() => {
          setImages(newImages);
          setIds([]);
          setCount(count + 1)
        }, 2000);
      }
    }
    return () => {
      // se duoc chay khi huy bo component
    };
  }, [ids]);

  const flipCard = (item) => {
    let newIds = [...ids];
    let newImages = [...images];
    newIds.push(item.id);
    newImages.forEach((it, index) => {
      if (item.index === index) {
        it.isShow = true;
      }
    });
    setImages(newImages);
    setIds(newIds);
  };
  const handleClick = (item) => {
    // Neu ids co 2 id roi thi dung lai
    if(ids.length === 2) {
      return
    }
    // Kich chinh cai dang lat thi khong lam gi
    let currentItem 

    // if(currentItem.length) {

    // }
    flipCard(item);
  };
   const onStart = () => {
     setInterval(() => {
       setTimer(prevState => {
        return prevState - 1;
      });
     }, 1000);
   }

  const renderImage = () => {
    return (
      <>
        
        {images.map((item, index) => (
          <CardImage
            handleClick={(data) => handleClick(data)}
            key={index}
            data={{ ...item, index }}
          />
        ))}
      </>
    );
  };


  return (
    <div className="App">
      <h1>Your Point : {count}</h1>
      <div id="boxcard">{renderImage()}</div>
      <h2>Remain time: {timer}</h2>
      <button onClick={()=>onStart()}>Start</button>
    </div>
  );
};

export default App;

/// khi 2 ảnh đang lật -> thì ko cho click cái ảnh thứ 3
// có bộ đếm timmer để tính thời gian chơi
// có count số điểm
// click vào chính nó -> return ko cho làm gì cả
