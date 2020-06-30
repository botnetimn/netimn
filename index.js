var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "netimn",
		password: "oauth:sgaj00s7e3m5dnu5qgp22f0rdik6n8",  
	},
	channels: ['#gaules', '#murilo_rt', '#jeffaocs', '#csrfps', '#vsmzin', '#cogu', '#mibrtv', '#brnwowzk1', '#stereonline', '#skipnho', '#skipnholive', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
