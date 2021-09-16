const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

const app = express();

// register view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((req, res) => {
	res.send('404');
});

app.listen(3000, () => {
	console.log('Server running ');
});
