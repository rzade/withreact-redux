import axios from 'axios';

export default {
	user: {
		login: credentials => axios.post(`/api/auth`, { credentials }).then(result => result.data.user),
		signup: credentials => axios.post(`/api/users`, { credentials }).then(results => results.data.user),
		currentUser: () => axios.get(`/api/users/current_user`).then(res => res.data.user).catch(err => localStorage.professionJWT = "")
	}
};