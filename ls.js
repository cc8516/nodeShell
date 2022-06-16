const fs = require("fs");

module.exports = function (done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err.stack);
    } else {
      //   process.stdout.write(files.join("\n"));
      //   process.stdout.write("\nprompt > ");
      done(files.join("\n"));
    }
  });
};
