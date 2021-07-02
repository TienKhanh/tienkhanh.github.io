import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    wrapSearch : {
        position: "relative",
        lineHeight: "60px",
        width: "60px",
        textAlign: "center",
        "&:hover" : {
          color: '#f26a19',
          cursor: "pointer",
        }
      },
    
      searchText:{
        width: "230px",
        border: "1px solid #f26a19",
        padding: "5px 10px",
        outline: "none",
      },
      searchBtn: {
        display: "inline-block",
        textAlign: "center",
        width: "80px",
        padding: "5px 0",
        background: "#f26a19",
        border: "1px solid #f26a19",
        outline: "none",
        cursor: "pointer",
        color: "#fff",
        marginLeft: "-6px",
      },
      searchBox : {
        "&::before" : {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "10px solid #f26a19",
          top: -13,
          right: 13,
    
        },
        background: "#f7f7f7",
        position: "absolute",
        top: 60,
        right: 10,
        width: 350,
        padding: "15px 15px 15px 20px",
        boxShadow:'0 0 10px rgb(0 0 0 / 50%)',
        borderTop: "4px solid #f26a19",
        zIndex: 2,
        lineHeight: "normal",
        visibility: "hidden",
        opacity: 0,
        transition: 'all 0.4s ease',
        WebkitTransform: "translate3d(0,20px,0)",
        pointerEvents: 'none',
      },
      searchLogo : {
        "& > i " : {
          fontSize: 18,
          color: '#212529',
          cursor: 'pointer',
        },
        "& > i:hover " : {
          color: '#f26a19',
        }
      },
      showSearchBox : {
        visibility: 'visible',
        opacity: 1,
        transform: 'translate3d(0,0,0)',
        pointerEvents: 'auto',
        zIndex: 3,
      }
}));


const SearchBox = () => {
  const classes = useStyles();

  const [showSearchBox, setShowSearchBox] = useState(false)

  const toggleSearchBox = () => {
      setShowSearchBox(!showSearchBox)
      console.log(showSearchBox)
  }

  return (
    <div className={classes.wrapSearch}>
      <div className={classes.searchLogo}>
        <i class="fas fa-search" onClick={toggleSearchBox}></i>
      </div>
      <div className={clsx(classes.searchBox, showSearchBox && classes.showSearchBox)} >
        <input type="text" class={classes.searchText} placeholder="Nhập tên sách" />
        <a href="" class={classes.searchBtn}> Tìm kiếm </a>
      </div>
    </div>
  );
};

export default SearchBox;
