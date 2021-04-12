export default class tokenData {
	checkTokenValue(token) {
		if (token === '') {
			 return null;
		}
		if(typeof token !== 'string') {
			return false;
		}
		if(token.length < 10) {
			return false;
		}

		token = token.split('Bearer ')[1];
		if(!token.match('/^[A-Za-z0-9]+$/g')) {
			return token;
		}
		return token;
	}
	async getTokenData(login, password) {
    const res = await fetch('api/auth', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				login,
				password,
			}),
		});
		if (res.status === 200) {
			const tokenData = res.json();
			this.checkTokenValue(JSON.stringify(tokenData));
			return Promise.resolve();
		}
		return Promise.reject();
	}
}