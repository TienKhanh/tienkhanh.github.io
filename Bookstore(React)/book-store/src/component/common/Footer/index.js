import { makeStyles } from '@material-ui/core/styles';
import SocialNetwork from '../../SocialNetwork';
import CopyRight from '../../CopyRight';

const useStyles = makeStyles((theme) => ({
    wrapFooter:{
        fontFamily: '"Open Sans",arial,sans-serif',
    }
  }));

const Footer = () => {

    const classes = useStyles();

    const dataSocial = [
        {
            name: 'facebook',
            icon: 'fab fa-facebook-f',
        },
        {
            name: 'instagram',
            icon: 'fab fa-instagram',
        },
        {
            name: 'linkedin',
            icon: 'fab fa-linkedin-in',
        },
        {
            name: 'pinterest',
            icon: 'fab fa-pinterest',
        },
        {
            name: 'reddit',
            icon: 'fab fa-reddit',
        },
        {
            name: 'twitter',
            icon: 'fab fa-twitter',
        },
    ]

    const dataFooterMenu = [
        {
            title: 'Vnbook.vn',
            url:'/'
        },
        {
            title: 'Về chúng tôi',
            url:'/'
        },
        {
            title: 'Liên hệ',
            url:'/'
        },
        {
            title: 'Điều khoản',
            url:'/'
        },
        {
            title: 'Chính sách bảo mật',
            url:'/'
        },
    ]

    return (
        <div className={classes.wrapFooter}>
              <SocialNetwork dataSocial={dataSocial}/>
              <CopyRight dataFooterMenu={dataFooterMenu}/>
        </div>
    )
}

export default Footer