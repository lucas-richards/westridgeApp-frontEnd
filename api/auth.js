import apiUrl from '../apiConfig'

export const signUp = async (credentials) => {
	try {
		const response = await fetch(apiUrl + '/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				credentials: {
					email: credentials.email,
					password: credentials.password,
					password_confirmation: credentials.passwordConfirmation,
				},
			}),
		});
		return response.json();
	} catch (error) {
		throw error;
	}
};

export const signIn = async (username,password) => {
	try {
		const response = await fetch(apiUrl + '/api/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			}),
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const signOut = async (user) => {
	try {
		const response = await fetch(apiUrl + '/sign-out', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token token=${user.token}`,
			},
		});
		return response.json();
	} catch (error) {
		throw error;
	}
};

export const changePassword = async (passwords, user) => {
	try {
		const response = await fetch(apiUrl + '/change-password', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token token=${user.token}`,
			},
			body: JSON.stringify({
				passwords: {
					old: passwords.oldPassword,
					new: passwords.newPassword,
				},
			}),
		});
		return response.json();
	} catch (error) {
		throw error;
	}
};
