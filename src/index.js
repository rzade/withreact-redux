import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from "./redux/history";
import store from './redux/store';
import App from './App';

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</Router>,
	document.getElementById('root')
);
