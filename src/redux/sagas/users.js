import { call, put } from 'redux-saga/effects';
import { userLoggedIn, createUserFailture } from '../actions/user';
import api from '../api';
import history from '../history';

export function* createUserSaga(action){
	try{
		const user = yield call(api.user.signup, action.user);
		localStorage.professionJWT = user.token;
		yield put(userLoggedIn(user));
		history.push('/');
	} catch(err){
		yield put(createUserFailture(err.response.data.errors));
	}
}

export function* fetchUserSaga(){
	const user = yield call(api.user.currentUser);
	yield put(userLoggedIn(user));
}