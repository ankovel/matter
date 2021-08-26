import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Dialog, Tooltip } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';
import ProductSlider from './ProductSlider';
import RadioSize from './RadioSize';
import Button from './Button';

const propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  open: false,
};

const useStyles = makeStyles({
  paper: {
    margin: 0,
    maxWidth: '70%',
    height: '100%',
    overflow: 'hidden',
  },
  header: {
    padding: '10px 20px',
    boxShadow: 'rgb(0 0 0 / 0%) 0px 14px 28px, rgb(0 0 0 / 4%) 0px 10px 10px',
    fontSize: '18px',
    fontWeight: 600,
  },
  content: {
    display: 'flex',
    height: 'calc(100% - 108px)',
    justifyContent: 'space-between',
    padding: '16px 24px 24px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
  },
  price: {
    fontSize: '24px',
    fontWeight: 400,
    color: '#ff6008',
  },
  infoProduct: {
    padding: '10px 0',
    borderBottom: 'solid 2px #f3f3f3'
  },
  description: {
    width: '52%',
    fontSize: '18px',
    fontWeight: '600',
  },
  collab: {
    width: '48%',
    fontSize: '16px',
    color: '#666',
  },
  text: {
    margin: '10px 0',
    textAlign: 'justify',
    fontSize: '16px',
    color: '#666',
  },
  btnMore: {
    padding: '0',
    fontSize: '12px',
    fontWeight: 'normal',
    border: 'none',
    letterSpacing: '2px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: 'solid 2px #f3f3f3'
  },
  slider: {
    width: '45%',
  },
  info: {
    width: '53%',
  },
  item: {
    paddingBottom: '10px',
    borderBottom: 'solid 2px #f3f3f3'
  },
  label: {
    margin: '10px 0', 
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
  },
  radioSize: {
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  helper: {
    fontSize: '12px',
    color: '#666',
  },
  guidelines: {
    marginLeft: 'auto',
    cursor: 'default',
    fontSize: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  btn: {
    width: '302px',
    margin: '0 auto',
  },
});

const QuickView = (props) => {
  const { open, onClose } = props;
  const [selectedValue, setSelectedValue] = useState('1');
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={open}
      onClose={onClose}
    >
      <header className={classes.header}>The Sideswept Dhoti</header>
      <div className={classes.content}>
        <ProductSlider className={classes.slider} />
        <div className={classes.info}>
          <h1 className={classes.title}>The Sideswept Dhoti + Bottom Line Grey (Silk)</h1>
          <div className={classes.item}>
            <span className={classes.price}>SGD 139.90 </span>
          </div>
          <div className={classes.infoProduct}>
            <h2 className={classes.description}>Description</h2>
            <p className={classes.text}>Inspired by the continuous length of the lunghi or 
              sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… 
            </p>
            <button type="button" className={classes.btnMore}>SEE MORE</button>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>Artisan Employment</h2>
            <span className={classes.collab}>54 jobs</span>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>Partnership</h2>
            <span className={classes.collab}>Randall Armstrong</span>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>In Collab</h2>
            <span className={classes.collab}>Augusta Mendoza</span>
          </div>
          <h3 className={classes.label}>size</h3>
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
            <Tooltip title='hello'>
              <span className={classes.guidelines}>Size Guidelines</span>
            </Tooltip>
          </div>
          <p className={classes.helper}>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
          <h3 className={classes.label}>Quantity</h3>
          <div className={classes.wrapper}>
            <Button variant="black">Add To Cart</Button>
            <button type="button">
              <FavoriteBorder className={classes.likeButton} />
            </button>
          </div> 
        </div>
      </div>
      <Button variant="black" className={classes.btn}>View Full Product Details</Button>
    </Dialog>
  );
}

QuickView.propTypes = propTypes;
QuickView.defaultProps = defaultProps;

export default QuickView;