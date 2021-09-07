import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

const FabricMap = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  )
}

export default FabricMap;