const mavenVerify = shell => {
  const cmd = `mvn -Dcli.version=TEST package`;
  console.debug(`DEBUG: mavenVerify:`);
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenVerify;
