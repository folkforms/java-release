const mavenVerify = (shell, options) => {
  const cmd = `mvn --no-transfer-progress -Dcli.version=TEST package`;
  console.debug(`DEBUG: mavenVerify:`);
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenVerify;
