import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import { IntlProvider } from 'react-intl';
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import messages from "./messages";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Nav from './components/pages/Nav';

import { fetchCurrentUserRequest } from "./redux/actions/user";

export default props => {
	const { location } = props;
	const dispatch = useDispatch();

	const lang = useSelector(state => state.locale.lang);
	const isAuthenticated = useSelector(state => !!state.user.email);
	const loaded = useSelector((state) => state.user.loaded);

	useEffect(() => {
        if(isAuthenticated){
            dispatch(fetchCurrentUserRequest());
        }
    })

	return (
	  <IntlProvider locale={lang} messages={messages[lang]}>
	  	<Loader loaded={loaded}>
	  		<Nav />
	  		<GuestRoute location={location} path='/' exact component={Home} />
	  		<GuestRoute location={location} path='/login' exact component={Login} />
	  		<UserRoute location={location} path='/dashboard' exact component={Dashboard} />
	  	</Loader>
	  </IntlProvider>
	);
}
