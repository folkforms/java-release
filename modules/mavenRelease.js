const checkIfVersionAlreadyExists = require("./checkIfVersionAlreadyExists");

const mavenRelease = (phase, shell, options) => {
  console.debug(`DEBUG: mavenRelease:`);
  checkIfVersionAlreadyExists(options);
  const cmd = `mvn --no-transfer-progress -Dcli.version=${options.version} ${phase}`;
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenRelease;
