import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { setLocale } from '../../redux/actions/locale';

export default props => {

	const dispatch = useDispatch();

	const changeLang = (e) => {
		dispatch(setLocale(e));
	}

	return (
		<div>
		  <p><FormattedMessage id="title"/></p>
          <a style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => changeLang("az")}>az</a>
          <a style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => changeLang("en")}>en</a>
          <a style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => changeLang("ru")}>ru</a>
        </div>
	)
}