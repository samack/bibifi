var net = require('net');
var port = 9000;
var host = "localhost";
var server = net.createServer();  

server.on('connection', handleConnection);

server.listen(port, host, function() {  
  console.log("{'return_code' : 0}");
});

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
    conn.end("{'return_code' : 255}");
  }

  function onConnClose() {
    console.log("{'return_code' : 0}");
  }

  function onConnError(err) {
    console.log("{'return_code' : 255}");
  }
}