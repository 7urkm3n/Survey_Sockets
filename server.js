var express = require('express'),
	app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);
	
// express.static will do all the magic static directory folder

app.use(express.static('app'));


var surveys = [];
// 	userName: 'Russel',
// 	location: 'Seattle',
// 	language: 'JS',
// 	comment: 'Its cool to survey'

// },{
// 	userName: 'Gurd',
// 	location: 'NYC',
// 	language: 'Ruby',
// 	comment: 'This is test survey'
// }];

io.sockets.on('connection', function(socket){
	console.log('socket id '+socket.id);
	socket.emit('surveys', surveys);

	socket.on('new_survey',function(data){
		surveys.push(data);
		io.emit('surveys', surveys);
	});
});

server.listen(4000, function(){
	console.log('Server runs on post 4000');
});
