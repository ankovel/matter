import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Loading as Icon } from '../../icons';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  loading: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    color: '#33333a',
    textTransform: 'uppercase',
  },
});

const Loading = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.loading, className)}>
      <Icon className={cn(classes.icon, 'rotating')} />
      <p className={classes.label}>Loading</p>
    </div>
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;