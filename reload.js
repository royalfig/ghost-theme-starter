const livereload = require('livereload');
const server = livereload.createServer();
server.watch(__dirname + '/assets');
console.log('Reload server started...');
