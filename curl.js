const request = require("request");

module.exports = function (arg, done) {
  request(arg, function (err, response, body) {
    if (err) {
      done(err);
    } else {
      done(body);
    }
  });
};
