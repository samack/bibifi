var extend = require('util')._extend;  
var inherits = require('util').inherits;  
var Transform = require('stream').Transform;



module.exports = Rules;

inherits(Rules, Transform);

var defaultOptions = {  
  highWaterMark: 10,
  objectMode: true
};

function Rules(options) {  
  if (! (this instanceof Rules)) {
    return new Rules(options);
  }

  options = extend({}, options || {});
  options = extend(options, defaultOptions);

  Transform.call(this, options);
}


/// _transform

Rules.prototype._transform = _transform;

function eSize(event){
      var meter = require("stream-meter")(4096);
      meter.on("error", function (err){
            console.log("Stream exceeds 4096");
       }
      event.pip(meter).pipe(process.stderr);
};

function _transform(event, encoding, callback) {  
  if (! event.id)
    return handleError(new Error('event doesn\'t have an `id` field'));

  pushToQueue(event, pushed);

  function pushed(err) {
    if (err) {
      handleError(err);
    }else
    {
      reply = {
        id: event.id,
        success: true
      };

      callback(null, reply);
    }
  }

  function handleError(err) {
    var reply = {
      id: event.id,
      success: false,
      error: err.message
    };

    callback(null, reply);
  }
};


/// Fake push to queue

function pushToQueue(object, callback) {  
  setTimeout(callback, Math.floor(30* 1000));  //check session timeout TODO: fix error
  eSize(object);   //check stream length TODO: fix error
 console.log("{'return_code' : 63}");
}