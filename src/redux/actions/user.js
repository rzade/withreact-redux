import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = user => ({
	type: 'USER_LOGGED_IN',
	user
})

export const userLoggedOut = () => ({
  type: 'USER_LOGGED_OUT'
});

export const login = credentials => dispatch => {
	return api.user.login(credentials).then(user => {
		localStorage.professionJWT = user.token;
		setAuthorizationHeader(user.token);
		dispatch(userLoggedIn({ ...user, loaded: true }));
	})
}

export const logout = () => dispatch => {
  localStorage.removeItem("professionJWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const createUserFailture  = errors => ({
	type: 'CREATE_USER_FAILTURE',
	errors
})

export const createUserRequest = user => ({
  type: 'CREATE_USER_REQUEST',
  user
});

export const createUser = credentials => dispatch => {
  return api.user.signup(credentials).then(data => {
    dispatch(createUserRequest(data));
  });
}

export const createUserFailure = errors => ({
  type: 'CREATE_USER_FAILURE',
  errors
});

export const fetchCurrentUserRequest = () => ({
  type: 'FETCH_CURRENT_USER_REQUEST'
});

export const fetchCurrentUserSuccess = user => ({
  type: 'FETCH_CURRENT_USER_SUCCESS',
  user
});