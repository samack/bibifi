var net = require('net');
var server = net.createServer();  
var JSONDuplexStream = require('json-duplex-stream');

var Rules = require('./rules');

var admPwd = "admin";
var argv = require('yargs')
    .command('test <port> [pswd]')
    .count()
    .default('pswd', "admin")
    .argv;

if(argv.pswd != null){
  admPwd = argv.pswd;
};

// console.log(admPwd);

if(Number.isInteger(argv.port)){
   
   var port = argv.port;
   if (port < 1024 || port > 65535){
    console.log("port failed range");
    port = -1;
   };
   
}else{

  console.log("port not an integer", argv.port);
  port= -1;
};


server.on('connection', handleConnection);
server.listen(port, function() {  
	  console.log("{\"return_code\" : 0}"); 
});

process.on('SIGTERM', function (){
            server.close(function (){
                console.log("{\"return_code\" : 0}"); 
                process.exit(0);
            } );
        } ); 


function handleConnection(conn) {  
  var s = JSONDuplexStream();
  var rules = Rules();
  conn.
    pipe(s.in).
    pipe(rules).
    pipe(s.out).
    pipe(conn);

    s.in.on('error', onProtocolError);
    s.out.on('error', onProtocolError);
    conn.on('error', onConnError);


  function onProtocolError(err) {
    conn.end("{'return_code' : 255}", err);
  }

  function onConnClose() {
    console.log("{'return_code' : 0}");
  }

  function onConnError(err) {
    console.log("{'return_code' : 63}");
  }
}