import React from 'react'
import Header from '../../component/common/Header'
import Banner from '../../component/banner'
import OverView from '../../component/OverView'
import Comment from '../../component/Comment'
import Footer from '../../component/common/Footer'
import Endow from '../../component/Endow'
import AlbumHome from '../../component/AlbumHome'
import NewHome from '../../component/NewHome'

const Home = () => {
    // data lay ra o day danh sach best seler => chi lay cac sach best seler
    // data fake o day , cho vao state

    

    return (
        <div>
            <Header/>
            {/* goi them cai baner */}
            {/* <Feature/> */}
            {/* <BestSler data={dataLayduojc} */}
            <Banner />
            <OverView />
            <AlbumHome />
            <Endow/>
            <Comment />
            <NewHome />
            <Footer />
        </div>
    )
}

export default Home