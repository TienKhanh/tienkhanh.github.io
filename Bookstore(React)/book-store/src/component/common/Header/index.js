import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

import SearchBox from '../../SearchBox';
import Menu from '../../Menu';


const useStyles = makeStyles((theme) => ({
    myRoot: {
        backgroundColor: 'blue'
    }
  }));

const Header = () => {

    const [showSearchBox, setShowSearchBox] = useState(false)

    const menu = [
        {
            label: 'Sách trong nước',
            link: '/store',
            childres: [
                {
                    label: 'sach 1',
                },
                {
                    label: 'sach 2',
                },
                {
                    label: 'sach 3',
                },
                {
                    label: 'sach 4',
                },
            ]
        },
        {
            label: 'Sách nước ngoài',
            childres: [
                {
                    label: 'sach 1',
                },
                {
                    label: 'sach 2',
                },
                {
                    label: 'sach 3',
                },
                {
                    label: 'sach 4',
                },
            ]
        },
        {
            label: 'Phiên chợ cũ'
        },
        {
            label:' Review sách'
        }
    ]


    const classes = useStyles();
    return (
        <div >
            <Menu dataList={menu}/>
            {
                showSearchBox && <SearchBox/>
            }
            <Icon className="fa far fa-search" onClick={() =>setShowSearchBox(!showSearchBox)}/>
        </div>
    )
}

export default Header