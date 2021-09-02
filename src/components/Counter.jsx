import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.number.isRequired,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  counter: {
    display: 'flex',
    height: '44px',
    border: '1px solid #dedede',
    backgroundColor: '#fff',
  },
  button: {
    cursor: 'pointer',
    fontSize: '30px',
    color: '#33333a',
    width: '42px',
    padding: '0',
    lineHeight: 0,
    backgroundColor: '#f3f3f3',
    border: 'none',
    outline: 'none',
    transition: '0.3s all ease',
    '&:hover': {
      backgroundColor: '#D3D3D3',
    },
  },
  value: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#515356',
    width: '42px',
  },
});

const Counter = (props) => {
  const { className, value, onChange } = props;
  const classes = useStyles();

  const handleAdd = () => {
    onChange(value + 1);
  };

  const handleSub = () => {
    onChange(value - 1);
  };

  return (
    <div className={cn(classes.counter, className)}>
      <button
        className={classes.button}
        onClick={handleSub}
        type="button"
        disabled={value === 0}
      >
        –
      </button>
      <span className={classes.value}>{value}</span>
      <button className={classes.button} onClick={handleAdd} type="button">
        +
      </button>
    </div>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
