import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  contact: {
      width: '149px',
      color: '#dedede',
  },
  title: {
      marginBottom: '19px',
  },
  text: {
      lineHeight: '1.83',
  },
  item: {
      display: 'block',
      marginTop: '27px',
  }
});

const Contacts = () => {
    const classes = useStyles();
    return (
        <div className={classes.contact}>
            <h3 className={classes.title}>Contact Us</h3>
            <p className={classes.text}>26A Pagoda St, TANGS, Singapore, 058187</p>
            <span className={classes.item}>+65 6221 5462</span>
        </div>
    )
}    

export default Contacts;