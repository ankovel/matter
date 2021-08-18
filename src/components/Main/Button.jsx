import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'black']).isRequired,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  button: {
    padding: '11.5px',
    transition: 'all 0.8s ease',
    position: 'relative',
    border: 'none',
    zIndex: 10,
    borderRadius: 0,
    '&:before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      width: 0,
      height: 0,
      transition: 'all 500ms ease',
    },
    '&:after': {
      position: 'absolute',
      display: 'block',
      content: '""',
      width: '100%',
      height: '100%',
      border: '2px solid',
      transition: 'all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    '&:hover': {
      '&:after': {
        width: 0,
        height: 0,
        opacity: 0,
      },
      '&:before': {
        width: '100%',
        height: '100%',
      },
      '& $whiteLabel': {
        color: '#fff',
      },
      '& $blackLabel': {
        color: '#33333a',
      },
    },
  },
  white: {
    backgroundColor: '#fff',
    '&:after': {
      borderColor: '#33333a',
    },
    '&:hover': {
      '&:before': {
        backgroundColor: '#33333a',
        border: '1px solid #666666',
      },
    },
  },
  black: {
    backgroundColor: '#33333a',
    '&:after': {
      borderColor: 'transparent',
    },
    '&:hover': {
      '&:before': {
        border: '2px solid #33333a',
        backgroundColor: '#fff',
      },
    },
  },
  label: {
    zIndex: 10,
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
  },
  whiteLabel: {
    color: '#33333a',
  },
  blackLabel: {
    color: '#fff',
  },
});

const ButtonComponent = (props) => {
  const { children, className, variant } = props;
  const classes = useStyles();

  const buttonClassName = cn(classes.button, className, {
    [classes.white]: variant === 'white',
    [classes.black]: variant === 'black',
  });

  const label = cn(classes.label, {
    [classes.whiteLabel]: variant === 'white',
    [classes.blackLabel]: variant === 'black',
  });

  return (
    <Button className={buttonClassName} classes={{ label }}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;