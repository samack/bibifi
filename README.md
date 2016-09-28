<html !DOCTYPE="html" lang="en">
<head>
</head>
<body>
<H1> BIBIFI </H1>

<UL><h3>Requirements:</h3>
  <li>TCP Server that listens on a port between 1,024 and 65,535</li>
  <li>Server initates with port between 1024 and 65535</il>
  <li>server initates with optional admin password, otherwise default is admin</li>

  <li>Requires BNF grammar and syntax</li>
  <li>user authentication in syntax</li>
  <li>keyword implemented and reserved words excluded in BNF format</li>
  <li>Responds with output in JSON format</li>
  <li>Enforces permissions on delegation</li>
  <li>Return termination codes 
  		<li>*** : terminate BNF program</li>
  		<li>63  : returned if server port is taken</li>
  		<li>0   : when server process sent SIGTERM</li>
  		<li>255</li>
  <li>Input not to exceed 4096</li>
  <li></li>

</UL>

<ul><h3>Optional Features:</h3>
  <li>String Functions</li>
  <li>filtering lists</li>
  <li>recursive expressions</li>
</ul>


<h3>Use and Test Cases:</h3>





</body>
</html>
