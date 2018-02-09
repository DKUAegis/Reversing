var password;
var table;

Java.perform( function(){
	var main = Java.use("com.example.simpleencryption.MainActivity");
	var nm = main.$new();
	main.bytesToAliSmsCode.implementation = function(v1 ,v2){
		table = v1;
		console.log("first : " + v1);
		console.log("second : " + v2);
		res = this.bytesToAliSmsCode(v1, v2);
		console.log("reverse : " + nm.aliCodeToBytes(table, password));
		return res;
	}
});
Java.perform( function(){
	var main = Java.use("com.example.simpleencryption.MainActivity");
	main.getPwdFromPic.implementation = function(){
		password = this.getPwdFromPic();
		console.log("password : " + password);
		return password;
	}
});

