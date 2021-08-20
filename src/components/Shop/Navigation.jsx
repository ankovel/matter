import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RadioSize from './RadioSize';
import CategoriesList from './CategoriesList';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  choice: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 0,
    fontSize: '12px',
    border: 'none',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  resets: {
    color: '#ff6008',
  },
  list: {
    margin: '15px 0',
    borderTop: 'solid 2px #dedede',
    borderBottom: 'solid 2px #dedede',
  },
  accordion: {
    margin: '15px 0',
  },
  sizes: {
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    position: 'relative',
    paddingLeft: '14px',
    '&:before': {
      content: '""',
      position: 'absolute',
      width:'6px',
      height: '1px',
      left: '0',
      bottom: '8px',
      backgroundColor: '#33333a',
    }          
  },
  radio: {
    margin: '15px 0',
  },
  radioSize: {
    marginRight: '10px',
    '&:last-child': {
      marginRight: '0',
    }
  },
  guide: {
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#33333a',
  },
});

const Navigation = (props) => {
  const { className } = props;
  const [selectedValue, setSelectedValue] = useState('1');
  const classes = useStyles();

  return (
    <div className={cn(classes.container, className)}>
      <div className={classes.choice}>
        <button type="button" className={classes.btn}>Filters</button>
        <button type="button" className={cn(classes.btn, classes.resets)}>Resets</button>
      </div>
      <CategoriesList className={classes.list} />
      <div>
        <h3 className={classes.sizes}>SIZES</h3>
        <div className={classes.radio}>
          <RadioSize
            className={classes.radioSize}
            onChange={setSelectedValue}
            value={selectedValue}
            label="1"
          />
          <RadioSize
            className={classes.radioSize}
            onChange={setSelectedValue}
            value={selectedValue}
            label="2"
          />
          <RadioSize
            className={classes.radioSize}
            onChange={setSelectedValue}
            value={selectedValue}
            label="3"
          />
          <RadioSize
            className={classes.radioSize}
            onChange={setSelectedValue}
            value={selectedValue}
            label="4"
          />
        </div>
        <Link to="/" className={classes.guide}>see our Sizing Guide</Link>
      </div>
    </div>
  )
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;