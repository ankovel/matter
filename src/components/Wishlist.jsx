import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles, Button } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
  checked: false,
};

const useStyles = makeStyles({
  wishlist: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  wishlistIcon: {
    width: '30px',
    height: '30px',
    marginBottom: '7px',
    marginRight: '5px',
    color: 'red',
  },
  favorite: {
    width: '30px',
    height: '30px',
    marginBottom: '7px',
    marginRight: '5px',
    color: 'red',
  },
  wishlistText: {
    paddingBottom: '7px',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: 'solid 2px #333',
  },
});

const Wishlist = (props) => {
  const { className, checked, onChange } = props;
  const classes = useStyles();

  return (
    <Button onClick={onChange} className={cn(classes.wishlist, className)}>
      {checked ? (
        <Favorite className={classes.favorite} />
      ) : (
        <FavoriteBorder className={classes.wishlistIcon} />
      )}
      <p className={classes.wishlistText}>Add to wishlist</p>
    </Button>
  );
};

Wishlist.propTypes = propTypes;
Wishlist.defaultProps = defaultProps;

export default Wishlist;
