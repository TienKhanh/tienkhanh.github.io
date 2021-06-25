import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TagCard from '../../TagCard';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  }));

const Feature = ({data}) => {
    const classes = useStyles();
    const dataFeature = [
        {
            icon: <Icon className="fa fa-plus-circle" />,
            title: 'Mieexn phi van chuyen',
            subTitle: 'ok'
        },
        {
            icon: <Icon className="fa fa-plus-circle" />,
            title: 'Mieexn phi van chuyen',
            subTitle: 'ok'
        },
        {
            icon: <Icon className="fa fa-plus-circle" />,
            title: 'Mieexn phi van chuyen',
            subTitle: 'ok'
        },
        {
            icon: <Icon className="fa fa-plus-circle" />,
            title: 'Mieexn phi van chuyen',
            subTitle: 'ok'
        },
    ]
    return (
        <div >
            {
                dataFeature.map((item, index) => <TagCard key={index} data={item}/>)
            }
        </div>
    )
}

export default Feature