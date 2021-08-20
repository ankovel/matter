import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  button: {
    width: '50px',
    height: '40px',
    fontSize: '14px',
    border: 'solid 1px #f3f3f3',
    backgroundColor: '#fff',
    cursor: 'pointer',
    color: '#515356',
  },
  active: {
    border: 'solid 1px #dedede',
    backgroundColor: '#f3f3f3',
  },
});

const RadioSize = (props) => {
  const { className, value, label, onChange } = props;
  const classes = useStyles();

  const buttonClassName = cn(classes.button, className, {
    [classes.active]: value === label,
  });

  const onClick = () => {
    onChange(label);
  };

  return (
    <button className={buttonClassName} onClick={onClick} type="button">{label}</button>
  );
};

RadioSize.propTypes = propTypes;
RadioSize.defaultProps = defaultProps;

export default RadioSize;