import axios from 'axios';
const proxy = 'http://192.168.140.130:5000';

export default {
	user: {
		login: credentials => axios.post(`${proxy}/api/auth`, { credentials }).then(result => result.data.user),
		signup: credentials => axios.post(`${proxy}/api/users`, { credentials }).then(results => results.data.user),
		currentUser: () => axios.get(`${proxy}/api/users/current_user`).then(res => res.data.user)
	}
};