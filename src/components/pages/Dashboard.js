import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
			<p><span><FormattedMessage id="dasborad"/></span>{user.email &&
				<span>
					<span> - {user.username}</span> - <span onClick={logoutt} style={{ cursor: 'pointer', color: 'red' }}><FormattedMessage id="logout"/></span>
				</span>
			}</p>
		</div>
	)
}