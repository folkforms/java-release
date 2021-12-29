const checkIfVersionAlreadyExists = (shell, version) => {
  console.debug(`DEBUG: checkIfVersionAlreadyExists:`);
  // FIXME This needs to pull groupId and artifactId out of pom file
  const cmd = `mvn dependency:get -Dartifact=folkforms:example:${version} > /dev/null 2>&1`;
  let throwError = true;
  try {
    console.debug(`DEBUG:     cmd = ${cmd}`);
    shell.exec(cmd);
    console.debug(`DEBUG:     dependency:get found an existing version with that version number`);
    throwError = true;
  } catch (error) {
    console.debug(`DEBUG:     dependency:get did not find an existing version with that version number`);
    throwError = false;
  }

  if(throwError) {
    throw new Error(`Version ${version} already exists.`);
  }
}

module.exports = checkIfVersionAlreadyExists;
