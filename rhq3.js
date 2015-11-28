var counter = 0;

function getBackoffTime(stage) {
	 return (Math.pow(2,stage)*1000) + (Math.round(Math.random() * 1000));
}

var db = {
	connect: function(cb) {
		if (counter < 9) {
			var timeout = getBackoffTime(counter);
			counter++;
			setTimeout(
				function(){
					db.connect(cb);
				},timeout);
			return cb('db not ready yet'); 
		} else {
			return cb(); 
		}
	}
};

db.connect(
	function(err) {
		if (err) { 
			console.error(err); 
			return;
		} else {
			console.log('successfully connected!'); 
		}
	});

