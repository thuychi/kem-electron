require('kem/dom/prototype');

var { cookie, app } = require('kem/dom');

function checkLogin() {
	if (cookie.has('user')) next();else alert('disabled');
}

app.use(checkLogin);

app.use('/', require('./controller/index'));
app.use('/account/([a-z]+)', require('./controller/account'));

app.handle();

module.exports = app;