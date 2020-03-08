import { takeLatest } from 'redux-saga/effects';
import { createUserSaga, fetchUserSaga } from './sagas/users';

export default function* rootSaga(){
	yield takeLatest('CREATE_USER_REQUEST', createUserSaga);
	yield takeLatest('FETCH_CURRENT_USER_REQUEST', fetchUserSaga);
}