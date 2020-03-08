import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

import { logout } from '../../redux/actions/user';

export default props => {

	const user = useSelector(state => state.user);

	const dispatch = useDispatch();

	const logoutt = () => {
		dispatch(logout());
	}

	return (
		<div>
			<p><span><FormattedMessage id="home"/></span>{user.email &&
				<span>
					<span> - {user.username}</span> - <span onClick={logoutt} style={{ cursor: 'pointer', color: 'red' }}><FormattedMessage id="logout"/></span>
				</span>
			}</p>
			<p><Link to='/login'><FormattedMessage id="login"/></Link></p>
			<p><Link to='/dashboard'><FormattedMessage id="dashboard"/></Link></p>
		</div>
	)
}