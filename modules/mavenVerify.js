const mavenVerify = shell => {
  const cmd = `mvn -Dcli.version=TEST package`;
  console.debug(`mavenVerify: cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenVerify;
