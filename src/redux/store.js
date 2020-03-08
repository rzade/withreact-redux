import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import rootReducer from './rootReducer';
import rootSaga from "./rootSaga";
import { fetchCurrentUserSuccess, fetchCurrentUserRequest } from './actions/user';
import { localeSet } from './actions/locale';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);

if(localStorage.professionJWT){
	setAuthorizationHeader(localStorage.professionJWT);
	store.dispatch(fetchCurrentUserRequest());
} else {
	store.dispatch(fetchCurrentUserSuccess());
}

if(localStorage.professionLang){
	store.dispatch(localeSet(localStorage.professionLang));
}

export default store;