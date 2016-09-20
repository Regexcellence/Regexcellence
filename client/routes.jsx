import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, indexRoute } from 'react-router';
import App from './app';
import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial.jsx';
import About from './components/pages/about.jsx';

export default (
	<div>
	<Route path='/' component={App} />
	<Route path='/home' component={Home} />
	<Route path='/tutorial' component={Tutorial} />
	<Route path='/about' component={About} />
	</div>
	)