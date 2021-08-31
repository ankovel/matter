import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Link } from '@material-ui/core';

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
    textDecoration: 'none',
    borderTop: 'solid 2px #33333a',
    color: '#33333a',
    transition: '0.4s all ease',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)',
    }
  },
  item: {
    display: 'flex',
    marginTop: '20px',
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

const BigArticle = (props) => {
  const { article } = props;
  const { title, text, date, image } = article;
  const classes = useStyles();

  return (
    <Link href="/article" className={classes.info}>
      <div className={classes.item}> 
        <span className={classes.date}>{`FIELDTESTED ${' '} ${date}`}</span>
      </div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.text}>{text}</p>
      <img className={classes.img} src={image} alt={title} />
    </Link>
  )
}

BigArticle.propTypes = propTypes;

export default BigArticle;