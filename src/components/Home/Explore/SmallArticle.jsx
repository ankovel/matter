import React from 'react';
import cn from 'classnames'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

const useStyles = makeStyles({
  info: {
    width: '263px',
    height: '283px',
    borderTop: 'solid 2px #33333a',
  },
  item: {
    display: 'flex',
    marginTop: '15px',
    marginBottom: '7px',
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
    height: '70px',
    marginBottom: '10px',
    fontSize: '24px',
    fontWeight: 'normal',
  },
  text: {
    fontSize: '16px',
  },
});

const SmallArticle = (props) => {
  const { article } = props;
  const { title, text, date, image } = article;
  const classes = useStyles();

  return (
    <div className={classes.info}> 
      <div className={classes.item}> 
        <span className={cn(classes.fieldTested, classes.date)}>FIELDTESTED</span>
        <span className={classes.date}>{date}</span>
      </div>
      <h2 className={classes.title}>{title}</h2>
      {image && <img className={classes.img} src={image} alt={title} />}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  )
}

SmallArticle.propTypes = propTypes;

export default SmallArticle;