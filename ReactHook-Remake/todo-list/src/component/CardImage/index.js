import React from 'react'
import './index.css'
const CardImage = ({data, handleClick}) => {

    return (
        <div onClick={()=>handleClick(data)} className={`item-card ${data.isDelete ? 'none' : 'block'}`} style={{visibility: 'visible'}}>
            <img alt="" src={data.src} style={{display: data.isShow ? 'inline-block' : 'none'}}/>
        </div>
    )
}

export default CardImage