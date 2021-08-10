import React from 'react'
import Header from '../../component/common/Header'
import Footer from '../../component/common/Footer'
import MenuAlbum from '../../component/MenuAlbum'

const Album = () => {
    
    const dataAlbum = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
            title: 'Album Ba Vì',
            link: '/album-detail',
            id: "bavi"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/kinh-nghiem-chup-anh-cuoi-da-nang-hoi-an-lang-co.jpg?raw=true",
            title: 'Album Đà Nẵng',
            link: '/album-chup-anh-cuoi-da-nang',
            id: "danang"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/chup%20anh%20cuoi%20ha%20noi.jpg?raw=true",
            title: 'Album Hà Nội',
            link: '/album-chup-anh-cuoi-ha-noi',
            id: "hanoi"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/chup-hinh-cuoi-phim-truong-alibaba-4_851ea2b921f7403ab48586cebf8fc352.jpg?raw=true",
            title: 'Album phim trường Alibaba',
            link: '/album-chup-anh-cuoi-phim-truong-alibaba',
            id: "alibaba"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/7C6A4264%20copy.jpg?raw=true",
            title: 'Album phim trường Santorini',
            link: '/album-chup-anh-cuoi-phim-truong-santorini',
            id: "santori"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/Phim-tr%C6%B0%E1%BB%9Dng-n%E1%BB%95i-ti%E1%BA%BFng-Smile-Ville.jpg?raw=true",
            title: 'Album phim trường Smile',
            link: '/album-chup-anh-cuoi-phim-truong-smile',
            id: "smile"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true",
            title: 'Album Studio',
            link: '/album-chup-anh-cuoi-studio',
            id: "studio"
            
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/mot-ngay-o-tam-dao-nha-tho-da-lavender.com_.vn_.jpg?raw=true",
            title: 'Album Tam Đảo',
            link: '/album-chup-anh-cuoi-tam-dao',
            id: "tamdao"
            
        },
    ]

    

    return (
        <>
            <Header/>
            <MenuAlbum dataList={dataAlbum}/>
            <Footer />
        </>
    )
}

export default Album