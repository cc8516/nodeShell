const fs = require("fs");

module.exports = function (arg, done) {
  //   const fn = process.argv[2];

  fs.readFile(arg, "utf-8", (err, data) => {
    // process.stdout.write(data);
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};
