function remoteMathService(cb) {
	var one;
	var two; 
	function postOneService(err, num) {
		if(err) {
			return cb(err,undefined);
		} else {
			one = num; 	
			callTwoService(postTwoService);
		}
	};
	function postTwoService(err, num) { 
		if(err) {
			return cb(err,undefined);
		} else {
			two = num;
			return cb(undefined, one + two); 
		}
	}

	callOneService(postOneService);
}

function callOneService(cb) { 
		setTimeout(function() {
		return cb(undefined, 1); 
	}, 1000);
}

function callTwoService(cb) { 
	setTimeout(function() {
		return cb(undefined, 2); 
	}, 1500);
}

remoteMathService(
	function(err, answer) { 
		if (err)  {
			console.log("error ", err); 
		} else {
			if (answer !== 3) {
				console.log("wrong answer", answer); 
			} else {
				console.log("correct"); 
			}
	}
});