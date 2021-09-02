import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    textDecoration: 'none',
    color: '#33333a',
    transition: '0.4s all ease',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)',
    }
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
    position: 'relative',
    marginRight: '10px',
    whiteSpace: 'pre-wrap',
    '&:after': {
      content: '""',
      position: 'absolute',
      width:'2px',
      height: '2px',
      left: '90px',
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
  img: {
    width: '100%',
  },
});

const SmallArticle = (props) => {
  const { article } = props;
  const { title, text, date, image, id } = article;
  const classes = useStyles();

  return (
    <Link to={`/article/${id}`} className={classes.info}> 
      <div className={classes.item}> 
        <span className={classes.date}>{`FIELDTESTED ${' '} ${date}`}</span>
      </div>
      <h2 className={classes.title}>{title}</h2>
      {image && <img className={classes.img} src={image} alt={title} />}
      {text && <p className={classes.text}>{text}</p>}
    </Link>
  )
}

SmallArticle.propTypes = propTypes;

export default SmallArticle;