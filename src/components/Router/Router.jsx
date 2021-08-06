import React from 'react';
import { Switch } from 'react-router-dom';
import { Home, Shop, Fabric, Journal, About } from '../../pages';
import Page from '../Page/Page';

const Router = () => {
  const text = 'text';
  console.log(text)
  return (
    <Switch>
      <Page exact path='/' component={Home}/>
      <Page path='/shop' component={Shop}/>
      <Page path='/fabric' component={Fabric}/>
      <Page path='/journal' component={Journal}/>
      <Page path='/about' component={About}/>
    </Switch>
  )
}

export default Router;