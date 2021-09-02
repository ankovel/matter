import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ArrowForwardIos } from '@material-ui/icons';

const propTypes = {
  fabric: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    location: PropTypes.string,
    link: PropTypes.string,
  }).isRequired, 
};

const useStyles = makeStyles({
  link: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    textDecoration: 'none',
    color: '#33333a',
    borderBottom: 'solid 1px #dedede',
    paddingBottom: '12px',
    '&:hover': {
      textDecoration: 'none',
      color: '#ff5e1b',
    },
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none',
    },
  },
  logo: {
    width: '110px',
    height: '90px',
    marginRight: '20px',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  info: {
    width: '240px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  city: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  arrow: {
    fontSize: '15px',
  },
});

const FabricCard = (props) => {
  const { fabric } = props;
  const { image, name, city,  link } = fabric;
  const classes = useStyles();

  return (
    <Link href={link} className={classes.link}>
      <img className={classes.logo} src={image} alt={name} />
      <div className={classes.info}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.city}>{city}</p>
      </div>
      <ArrowForwardIos className={classes.arrow} />
    </Link>
  )
};

FabricCard.propTypes = propTypes;

export default FabricCard;