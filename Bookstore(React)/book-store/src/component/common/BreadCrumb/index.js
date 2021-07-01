import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({

  }));

const BreadCrumb = () => {
    const classes = useStyles();
    const dataBreadCrumb = [
        {
            title: 'Trang chủ',
            linkItem: '/'
        },
        {
            title: 'Sách trong nước',
            linkItem: '/store'
        },
        {
            title: 'Sách kinh tế',
            linkItem: null
        },
    ]
    const renderBreadCrumb = () => {
        return (
            <div>
              {dataBreadCrumb.length &&
                dataBreadCrumb.map((item, index) => {
                  return <span> <Link to={`${item.linkItem ? item.linkItem : ""}`}>{item.title}</Link> {`${dataBreadCrumb.length - 1 === index ? "" : ">"}`}</span>
                })}
            </div>
          );
    }

    return (
        <div >
            {
                renderBreadCrumb()
            }
        </div>
    )
}

export default BreadCrumb