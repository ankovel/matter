import React, { useState } from 'react';
import { makeStyles, FormControl, Select, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles({
  filters: {
    color: '#ff5e1b',
    opacity: '1 !important',
  },
  item: {
    color: '#515356',
  },
  select: {
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '1px',
    color: '#33333a',
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
  const [sort, setSort] = useState('FILTERS');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        classes={{ select: classes.select, icon: classes.icon, disabled: classes.filters }}
        value={sort}
        onChange={handleChange}
        IconComponent={ExpandMore}
        disableUnderline
        displayEmpty
      >
        <MenuItem className={classes.filters} value="FILTERS" disabled>
          FILTERS
        </MenuItem>
        <MenuItem className={classes.item} value="FIELD-TESTED">FIELD-TESTED</MenuItem>
        <MenuItem className={classes.item} value="REMARKABLE RESILIENCE">REMARKABLE RESILIENCE</MenuItem>
        <MenuItem className={classes.item} value="LESSONS">LESSONS</MenuItem>
        <MenuItem className={classes.item} value="THEMATTERWAy">#THEMATTERWAy</MenuItem>
        <MenuItem className={classes.item} value="MAKING">MAKING</MenuItem>
        <MenuItem className={classes.item} value="WAYSTOWEARASCARF">#WAYSTOWEARASCARF</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;