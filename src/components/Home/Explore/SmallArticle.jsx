import React from 'react';
import cn from 'classnames'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '555px',
  },
  info: {
    width: '263px',
    height: '283px',
    borderTop: 'solid 2px #33333a',
  },
  item: {
    display: 'flex',
    marginTop: '15px',
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
    marginTop: '7px',
    fontSize: '24px',
    fontWeight: 'normal',
  },
  img: {
    marginTop: '18px',
  },
});

const SmallArticle = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}> 
        <div className={classes.item}> 
          <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
          <span className={classes.date}>JANUARY 19, 2017</span>
        </div>
        <h2 className={classes.title}>Kérastase: A Collaboration</h2>
        <img className={classes.img} src="images/small2.png" alt="explore" />
      </div>

      <div className={classes.info}> 
        <div className={classes.item}> 
          <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
          <span className={classes.date}>JANUARY 19, 2017</span>
        </div>
        <h2 className={classes.title}>Kérastase: A Collaboration</h2>
        <img className={classes.img} src="images/small2.png" alt="explore" />
      </div>

      <div className={classes.info}> 
        <div className={classes.item}> 
          <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
          <span className={classes.date}>JANUARY 19, 2017</span>
        </div>
        <h2 className={classes.title}>Kérastase: A Collaboration</h2>
        <img className={classes.img} src="images/small2.png" alt="explore" />
      </div>

      <div className={classes.info}> 
        <div className={classes.item}> 
          <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
          <span className={classes.date}>JANUARY 19, 2017</span>
        </div>
        <h2 className={classes.title}>Kérastase: A Collaboration</h2>
        <img className={classes.img} src="images/small2.png" alt="explore" />
      </div>
      
    </div>
  )
}

export default SmallArticle;