//Routers 
const apiRouter = require('../routes/');
const apiUser = require('../routes/user');
const apiBlog = require('../routes/blog');

module.exports = function (app) {
app.use(apiRouter);
app.use(apiUser);
app.use(apiBlog);
}