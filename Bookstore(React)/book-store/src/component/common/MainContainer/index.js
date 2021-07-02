import { makeStyles } from '@material-ui/core/styles';
import SocialNetwork from '../../SocialNetwork';
import CopyRight from '../../CopyRight';

const useStyles = makeStyles((theme) => ({
    wrapMain:{
        background: "#eeeeee",
        padding: "20px 0 50px 0",
        minHeight: "820px",
    }
  }));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.wrapMain}>

        </div>
    )
}

export default Footer