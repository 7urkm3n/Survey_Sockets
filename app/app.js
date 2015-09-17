var socket = io.connect('http://localhost:4000', {'forceNew':true});
	socket.on('surveys', function(data) {
		console.log(data);
		var html = data.map(function(data){
			return (`
				<div class='alert alert-success'>
					<div>
						Username: ${data.userName}
					</div>
					<div>
						Location: ${data.location}
					</div>
					<div>
						language: ${data.language}
					</div>
					<div>
						Comment: ${data.comment}
					</div>
				<div>
				`)
		}).join(' ');
			document.getElementById('surveys').innerHTML = html;
	});


function addSurvey(e){
	var surveyLoad = {
		userName: document.getElementById('username').value,
		location: document.getElementById('location').value,
		language: document.getElementById('language').value,
		comment: document.getElementById('comment').value
	};
	socket.emit('new_survey', surveyLoad);
	return false;
}