const container = require('./src/startup/container');
const server = container.resolve('app');
const { MONGO_URI } = container.resolve('config');

/*const mongoose = require('mongo');
mongoose.set('useCreateIndex', true);
mongoose
  .conect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    server.start();
  })
  .catch(console.log);
*/

server.start();
