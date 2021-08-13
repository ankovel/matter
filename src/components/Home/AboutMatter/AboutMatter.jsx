import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginBottom: '62px',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
    color: '#33333a',
  },
  about: {
    display:'flex',
    justifyContent: 'space-between',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '555px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.67',
    color: '#030303',
  },
  infoTitle: {
    marginBottom: '15px',
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#33333a',
  },
  list: {
     listStyle: 'none',
  },
  item: {
    fontSize: '18px',
    lineHeight: '1.67',
    color: '#030303',
  },

});

const AboutMatter = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>About Matter</h1>
      <div className={classes.about}>
        <div className={classes.img}>
          <img src="images/about.png" alt="about" />
        </div>

        <div className={classes.wrapper}>
          <p className={classes.text}> 
            Our mission is threefold - to foster designer-artisan collaborations, 
            inspire consumers to value provenance and process, and pioneer industry 
            change and sustainability for rural textile communities. 
          </p>

          <div className={classes.info}>
            <h3 className={classes.infoTitle}>Artisan Employment Days Created</h3>
            <span className={classes.span}>123456</span>
          </div>

          <div className={classes.info}>
            <h3 className={classes.infoTitle}>Countries Involved To Date</h3>
            <ul className={classes.list}>
              <li className={classes.item}>India</li>
              <li className={classes.item}>China</li>
              <li className={classes.item}>Sri Lanka</li>
            </ul>
          </div>

          <div className={classes.info}>
            <h3 className={classes.infoTitle}>#MatterTribe </h3>
              <ul className={classes.list}>
                <li className={classes.item}>12 designers</li>
                <li className={classes.item}>12 Factories</li> 
              </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMatter;