// module.exports = [
//     {   method: 'GET',
//         path: '/users/{id}', 
//     	handler: function (request, reply) {
//         reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//     	} 
//     },
//     { 	method: 'GET',
//         path: '/users', 
//         handler: function (request, reply) {
//         	reply('Hello, world!');
//     	} 
//     }
// ];

module.exports = function (request, reply) {
 
  reply.file('./index.html');
 
};