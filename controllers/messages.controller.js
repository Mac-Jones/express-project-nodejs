const path = require('path');

function getMessages(req, res) {
	// res.sendFile(path.join(__dirname, '..', 'public', 'images', 'wife.jpg'));
	res.render('messages', {
		title: 'my friends',
		friend: 'Rod Abraham Melano',
	});
}

function postMessage(req, res) {
	console.log('Updating messages!.....');
}

module.exports = {
	getMessages,
	postMessage,
};
