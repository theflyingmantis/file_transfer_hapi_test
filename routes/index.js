exports.register = function (server, options, next) {
 
  server.route({
    path: '/',
    method: 'GET',
    handler: require('./user')
  });
 

 
  next();
 
};
 

exports.register.attributes = {
    name: 'index_route',
    version: require('../package.json').version
};