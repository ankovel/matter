import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

const Page = (props) => {
  const { path, component } = props;

  return (
    <>
      <Header />
      <main>
        <Route exact path={path} component={component} {...props} />
      </main>
      <Footer />
    </>
  )
};

Page.propTypes = propTypes;

export default Page;