//There’s a bug in the following snippet. 
//Can you fix it and write a test to ensure it does not regress?
// doThing() defined elsewhere

var testcase = {'error':undefined, 'result':undefined};

function doThing(cb){
	cb(testcase.error,testcase.result);
};

function test(sampleTest) {
	testcase = sampleTest;
	foo (function (err, res) {
		if(sampleTest.error != err || sampleTest.result != res) {
			console.log("Expected" + JSON.stringify(sampleTest) + " but the result is error:"+err+" result:"+res);
		} else {
			console.log("Test case:" + JSON.stringify(sampleTest) + " passed");
		}
	});
};

function foo(callback) { 
	doThing(function(err, res) {
		if(callback) {
			if (err) {
				callback(err)
			} else {
				callback(null, res);
			}
		} 
	});
};

foo(function(err, res){ 
	if(err) {
		console.log('Error!', err);
    } else {
		console.log('Done!', res);
	}
});

//Regression test for pervious success case
test({'error':undefined, 'result':"Result"});