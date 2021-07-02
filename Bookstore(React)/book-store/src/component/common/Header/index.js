import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Menu from '../../Menu';
import Logo from '../../Logo';
import Login from '../../Login';
import SearchBox from '../../SearchBox';

const useStyles = makeStyles((theme) => ({
    wrapHeader: {
        boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important"
    },
    
    headerBox: {
        height: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
  }));

const Header = () => {

    const [showSearchBox, setShowSearchBox] = useState(false)

    const menu = [
        {
            label: 'Sách trong nước',
            link: '/store',
            childrens: [
                {
                    label: 'Văn học',
                },
                {
                    label: 'Sách kinh tế',
                },
                {
                    label: 'Tâm lý - Kỹ năng sống',
                },
                {
                    label: 'Nuôi dạy con',
                },
                {
                    label: 'Sách thiếu nhi',
                },
                {
                    label: 'Tiểu sử - Hồi ký',
                },
                {
                    label: 'Sách học ngoại ngữ',
                },
            ]
        },
        {
            label: 'Sách nước ngoài',
            childrens: [
                {
                    label: 'Fiction',
                },
                {
                    label: 'Business & management',
                },
                {
                    label: 'Personal development',
                },
                {
                    label: "Children's books",
                },
                {
                    label: "Dictionaries",
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
        <div className={classes.wrapHeader}>
            <Container maxWidth="lg" className={classes.headerBox}>
                <Logo />
                <Menu dataList={menu}/>
                <SearchBox />
                <Login />
                {/* <Icon className="fa far fa-search" onClick={() =>setShowSearchBox(!showSearchBox)}/> */}
            </Container>
            
            
        </div>
    )
}

export default Header