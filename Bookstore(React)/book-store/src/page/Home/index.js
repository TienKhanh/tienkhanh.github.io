import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/common/Header';
import Featured from '../../component/common/Featured';
import Banner from '../../component/Banner';
import Footer from '../../component/common/Footer';
import SeeList from '../../component/common/SeeList';
import ReviewSection from '../../component/common/ReviewSection';


const useStyles = makeStyles((theme) => ({
    
    wrapMain : {
        background: "none",
        padding: "0",
        backgroundImage: "url('https://tienkhanh.github.io/Bookstore/images/background/bg-wallpaper-1.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: '820px',
    }

}));
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            
            <div className={classes.wrapMain}>
                <Banner />
                <Featured />
                <SeeList />
                <ReviewSection />
            </div>
            <Footer />        

        </div>
    )
}

export default Home