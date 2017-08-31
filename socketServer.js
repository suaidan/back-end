const express = require('express');
const ws = require('ws');
var webSocketServer = ws.Server;
var app = express();
var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(`'fangwen'${host}${port}`)
})
var wss = new webSocketServer({server});
var socServers = {};
wss.on("connection",function(ws,res){
	console.log("successfully connect");
	ws.on("message",function(message){
		socServers[message] = ws;
		ws.send("Hello,world");
		console.log(socServers);
	})
})
app.get('/',function(req,res){
	res.send("coonnected by get")
})
