import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { categoriesList } from '../../constants/categories';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  list: {
    padding: '12px 0',
  },
  accordion: {
    position: 'inherit',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  summary: {
    padding: 0,
    minHeight: '48px !important',
  },
  content: {
    margin: '0 !important',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  icon: {
    width: '22px',
  },
  subIcon: {
    width: '20px',
    transform: 'rotate(-90deg)',
  },
  name: {
    fontSize: '26px',
    fontWeight: 'normal',
    color: '#333',
  },
  expandIcon: {
    order: '-1',
  },
  subName: {
    fontSize: '14px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  subLink: {
    margin: '0 0 20px 40px',
    fontSize: '14px',
    textDecoration: 'none',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#666',
    '&:last-child': {
      marginBottom: '0',
    },
    '&:hover': {
      color: '#ff6008',
      transition: '0.3s color ease',
    }
  }, 
  link: {
    margin: '0 0 10px 30px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#333',
    '&:last-child': {
      marginBottom: '0',
    },
  },
});

const CategoriesList = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.list, className)}>
      {categoriesList.map(category => (
        <Accordion key={category.id} className={classes.accordion}>
          <AccordionSummary
            className={classes.summary}
            classes={{ content: classes.content }}
            expandIcon={<ExpandMore className={classes.icon} />}
          >
            <h3 className={classes.name}>{category.name}</h3>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.details }}>
            {category.subcategories.map(subcategory => (
              <>
                {subcategory.subcategories && subcategory.subcategories.length > 0 ?
                  <Accordion key={subcategory.id} className={classes.accordion}>
                    <AccordionSummary
                      className={classes.summary}
                      classes={{ content: classes.content, expandIcon: classes.expandIcon }}
                      expandIcon={<ExpandMore className={classes.subIcon} />}
                    >
                      <h4 className={classes.subName}>{subcategory.name}</h4>
                    </AccordionSummary>
                    <AccordionDetails classes={{ root: classes.details }}>
                      {subcategory.subcategories && subcategory.subcategories.map(childCategory => (
                        <Link key={childCategory.id} to="/" className={classes.subLink}>{childCategory.name}</Link>
                      ))}
                    </AccordionDetails>
                  </Accordion> :
                  <Link key={subcategory.id} to="/" className={classes.link}>{subcategory.name}</Link>
                }
              </>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

CategoriesList.propTypes = propTypes;
CategoriesList.defaultProps = defaultProps;

export default CategoriesList;