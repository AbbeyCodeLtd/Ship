/* eslint-disable no-console */

const functions = require('firebase-functions');
const fb = require('fb');
const _ = require('lodash');
const cors = require('cors')({ origin: true });

const FB = new fb.Facebook({
	appId: '488907061521549',
	autoLogAppEvents: true,
	xfbml: true,
	version: 'v3.1'
});

const facebookAuth = {
	id: functions.config().facebook.id,
	key: functions.config().facebook.key
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});

exports.fetchMutualFriends = functions.https.onRequest((request, response) => {
	cors(request, response, () => {});
	const uid = request.query.uid;
	const params = {
		access_token: `${facebookAuth.id}|${facebookAuth.key}`
	};
	const path = `/${uid}/friends`;
	try {
		let searchMatches = [];
		FB.api(path, 'GET', params).then(result => {
			const friends = result.data;
			searchMatches = [
				...searchMatches,
				...friends
			];
			let count = 0;
			searchMatches.forEach(friend => {
				const mutualPath = `/${friend.id}/friends`;
				FB.api(mutualPath, 'GET', params).then(mutualResult => {
					const mutualFriends = mutualResult.data;
					searchMatches = [
						...searchMatches,
						...mutualFriends
					];
					count++;
					if (count === friends.length) {
						_.remove(searchMatches, user => user.id === uid);
						const toSend = {
							total: searchMatches.length,
							data: _.uniqBy(searchMatches, 'id')
						};
						response.send(toSend);
					}
				});
			});
		});
	} catch (err) {
		response.send(err);
	}

});
