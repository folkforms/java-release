const checkIfVersionAlreadyExists = require("./checkIfVersionAlreadyExists");

const mavenRelease = (phase, shell, options) => {
  checkIfVersionAlreadyExists(shell, options.version);

  const cmd = `mvn -Dcli.version=${options.version} ${phase}`;
  console.debug(`DEBUG: mavenRelease:`);
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenRelease;
