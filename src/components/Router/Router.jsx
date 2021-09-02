import React from 'react';
import { Switch } from 'react-router-dom';
import { Home, Shop, Fabric, Journal, About, Article } from '../../pages';
import Page from '../Page/Page';

const Router = () => (
  <Switch>
    <Page exact path='/' component={Home}/>
    <Page path='/shop' component={Shop}/>
    <Page path='/fabric' component={Fabric}/>
    <Page path='/journal' component={Journal}/>
    <Page path='/about' component={About}/>
    <Page path='/article/:id' component={Article}/>
  </Switch>
);

export default Router;