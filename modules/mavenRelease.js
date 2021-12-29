const checkIfVersionAlreadyExists = require("./checkIfVersionAlreadyExists");

const mavenRelease = (phase, shell, options) => {
  console.debug(`DEBUG: mavenRelease:`);
  if(options.testMode) { shell.cd("example"); }
  checkIfVersionAlreadyExists(shell, options);
  const cmd = `mvn -Dcli.version=${options.version} ${phase}`;
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
  if(options.testMode) { shell.cd(".."); }
}

module.exports = mavenRelease;
