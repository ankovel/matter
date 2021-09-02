import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
 
const useStyles = makeStyles({
  info: {
    textAlign: 'justify',
    width: '32%',
    height: '283px',
    textDecoration: 'none',
    color: '#33333a',
    transition: '0.4s all ease',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)',
    }
  },     
  title: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 600,
  },
  text: {
    height: '180px',
    fontSize: '16px',
  },
  img: {
    height: '180px',
    width: '100%',
  },
});

const FabricArticle = (props) => {
  const { article } = props;
  const { title, image, text, id } = article;
  const classes = useStyles();

  return (
    <Link to={`/article/${id}`} className={classes.info}> 
      {image ? <img className={classes.img} src={image} alt={title} /> : <p className={classes.text}>{text}</p>}
      <h2 className={classes.title}>{title}</h2>
    </Link>
  )
}

FabricArticle.propTypes = propTypes;

export default FabricArticle;