module.exports = function (done) {
  //   process.stdout.write("promt > ");
  //   process.stdin.on("data", (data) => {
  //     const cmd = data.toString().trim();
  //     if (cmd === "pwd") {
  //       process.stdout.write(process.cwd());
  //     } else {
  //       process.stdout.write("You types: " + cmd);
  //     }
  //     process.stdout.write("\nprompt > ");
  //   });
  done(process.cwd());
};
