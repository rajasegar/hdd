const app = require('./api/index');

const PORT = process.env.port || 3000;
app.listen(3000);

console.log('Listening on port: ', 3000);
