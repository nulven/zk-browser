import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'regenerator-runtime/runtime';

import Page from './Page';


ReactDOM.render(
	<BrowserRouter>
	    <Switch>
	      <Route path="/" render={props => <Page {...props} />} />
	    </Switch>
  	</BrowserRouter>
,
  document.getElementById('root')
);
