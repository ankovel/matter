import React from 'react';
import cn from 'classnames'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  info: {
    width: '555',
    borderTop: 'solid 2px #33333a',
  },
  item: {
    display: 'flex',
    marginTop: '20px',
  },
  date: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  fieldTested: {
    position: 'relative',
    marginRight: '10px',
    '&:after': {
      content: '""',
      position: 'absolute',
      width:'2px',
      height: '2px',
      right: '-5px',
      bottom: '8px',
      borderRadius: '50%',
      backgroundColor: '#33333a',
    }          
  },
  title: {
    marginTop: '10px',
    fontSize: '30px',
    fontWeight: 'normal',
  },
  text: {
    width: '515px',
    marginTop: '20px',
    fontSize: '16px',
  },
  img: {
    marginTop: '50px',
  },
});

const BigArticle = () => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <div className={classes.item}> 
        <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
        <span className={classes.date}>JANUARY 19, 2017</span>
      </div>
      <h2 className={classes.title}>Connected Clothing: Raye Padit</h2>
      <p className={classes.text}>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, 
        no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: 
        Connected Threads Asia, PeyaR, and Swagalls. 
      </p>
      <img className={classes.img} src="images/explore.png" alt="explore" />
    </div>
  )
}

export default BigArticle;