import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial.jsx';
import About from './components/pages/about.jsx';

export default (
	<div>
  	<Route path='/' component={Home} />
  	<Route path='/tutorial' component={Tutorial} />
  	<Route path='/about' component={About} />
	</div>
	)		
