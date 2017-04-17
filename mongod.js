const exec = require('child_process').exec;
exec('mongod.bat', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
console.log("Starting MongoDB server...");