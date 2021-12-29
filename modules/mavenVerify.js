const mavenVerify = (shell, options) => {
  const cmd = `mvn -Dcli.version=TEST package`;
  console.debug(`DEBUG: mavenVerify:`);
  console.debug(`DEBUG:     cmd = ${cmd}`);
  if(options.testMode) { shell.cd("example"); }
  shell.exec(cmd);
  if(options.testMode) { shell.cd(".."); }
}

module.exports = mavenVerify;
