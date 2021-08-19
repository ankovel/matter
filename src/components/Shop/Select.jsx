import React, { useState } from 'react';
import { makeStyles, FormControl, Select, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles({
  formControl: {
    width: '165px',
    margin: '10px 0',
    padding: '10px 5px',
    fontSize: '14px',
    textTransform: 'uppercase',
    border: 'solid 1px #dedede',
    color: '#515356',
  },
  item: {
    color: '#515356',
  },
  select: {
    padding: 0,
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: '30px',
    height: '20px',
    fontWeight: 'normal',
    color: '#dedede',
  },
});

const SelectComponent = () => {
  const classes = useStyles();
  const [sort, setSort] = useState('price');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        classes={{ select: classes.select, icon: classes.icon }}
        value={sort}
        onChange={handleChange}
        label="Select"
        disableUnderline
        IconComponent={ExpandMore}
      >
        <MenuItem className={classes.item} value="price">Price</MenuItem>
        <MenuItem className={classes.item} value="size">Size</MenuItem>
        <MenuItem className={classes.item} value="name">Name</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;