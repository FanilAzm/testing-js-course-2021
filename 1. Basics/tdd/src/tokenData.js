export default class tokenData {
	checkTokenValue(token) {
		if (token === '') {
			 return null;
		}
		if(typeof token === 'string' && token.length > 1) {
			return token;
		}

		// if(token.length < 10) {
		// 	return false;
		// }
		
		// const pattern = /^[A-Za-z0-9]+$/g;
		// if(token === token.match(pattern)) {
		// 	return token.substring(0, 7);
		// }
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