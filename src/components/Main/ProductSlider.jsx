import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  thumbs: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    height: '100%',
  },
  btn: {
    marginBottom: '20px',
    cursor: 'pointer',
    maxWidth: '65px',
    padding: 0,
    border: '2px solid transparent',
  },
  active: {
    borderColor: '#ff6008',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 19%)',
    height: '100%',
    backgroundColor: '#f3f3f3',
  },
  main: {
    width: '100%',
  },
});

const images = [
  'https://i.postimg.cc/tTTZh5ZJ/2021-08-26-12-35-49.png',
  'https://i.postimg.cc/9XY48Mqr/2021-08-17-17-58-16.png',
  'https://i.postimg.cc/HsLWDbHY/2021-08-16-14-45-49.png',
  'https://i.postimg.cc/MppNsY7w/2021-08-16-15-31-02.png',
];

const ProductSlider = (props) => {
  const { className } = props;
  const classes = useStyles();
  const [activeImage, setImage] = useState(images[0]);

  const handleClick = (image) => {
    setImage(image);

    const elements = document.getElementsByClassName(classes.active);
    elements[0].scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <div className={cn(classes.container, className)}>
      <div className={classes.thumbs}>
        {images.map(image => {
          const buttonClassName = cn(classes.btn, {
            [classes.active]: image === activeImage,
          });

          return (
            <button type="button" 
              className={buttonClassName} 
              key={image} 
              onClick={() => handleClick(image)}>
              <img  className={classes.image} src={image} alt={image} />
            </button>
          )     
        })}
      </div>
      <div className={classes.wrapper}>
        <img className={classes.main} src={activeImage} alt={activeImage} />
      </div>
    </div>
  );
};

ProductSlider.propTypes = propTypes;
ProductSlider.defaultProps = defaultProps;

export default ProductSlider;