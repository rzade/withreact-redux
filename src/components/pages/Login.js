import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

import { login } from '../../redux/actions/user';

export default props => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const dispatch = useDispatch();

	const signin = () => {
		dispatch(login({ email: email, password: password }));
	}

	return (
		<div>
			<p><Link to='/'><FormattedMessage id="home"/></Link></p>
			<p><FormattedMessage id="login"/></p>
			<input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
			<input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
			<button onClick={signin}><FormattedMessage id="signin"/></button>
		</div>
	)
}