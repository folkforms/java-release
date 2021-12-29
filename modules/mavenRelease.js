const mavenRelease = (phase, shell, options) => {
  const code = checkIfVersionAlreadyExists(options.version);
  if(code !== 0) {
    throw new Error(`Version ${options.version} already exists.`);
  }

  const cmd = `mvn -Dcli.version=${options.version} ${phase}`;
  console.debug(`mavenRelease: cmd = ${cmd}`);
  shell.exec(cmd);
}

const checkIfVersionAlreadyExists = version => {
  const cmd = `mvn dependency:get -Dartifact=folkforms:example:${version} -o -DrepoUrl=${process.env.MAVEN_REPO}`;
  console.debug(`checkIfVersionAlreadyExists: cmd = ${cmd}`);
  try {
    shell.exec(cmd);
    return 1;
  } catch (error) {
    return 0;
  }
}

module.exports = mavenRelease;
