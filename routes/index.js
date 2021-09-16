const express = require('express');

const router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

router.get('/', (req, res) => {
	res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res) => {
	res.render('new');
});

router.post('/new', (req, res) => {
	console.log(req.body);
	const newMessage = {
		text: req.body.message,
		user: req.body.username,
		added: new Date(),
	};
	console.log(newMessage);
	messages.push(newMessage);
	res.redirect('/');
});

module.exports = router;
