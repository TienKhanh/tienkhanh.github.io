import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    wrapCard: {
        display: 'flex'
    }
  }));

const TagCard = ({data}) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapCard}>
            <div className={classes.lef}>
                {data.icon}
            </div>
            <div className={classes.right}>
                <div className={classes.title}>{data.title}</div>
                <div className={classes.subTitle}>{data.subTitle}</div>
            </div>
        </div>
    )
}

export default TagCard