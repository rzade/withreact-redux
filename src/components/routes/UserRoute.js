import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ component: Component, ...rest }) => {
	const isAuthenticated = useSelector(state => state.user.email);
	return (
		<Route
			{...rest}
			render={props => 
				isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	)
}