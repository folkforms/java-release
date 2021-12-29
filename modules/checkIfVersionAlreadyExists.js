const checkIfVersionAlreadyExists = (shell, version) => {
  console.debug(`DEBUG: checkIfVersionAlreadyExists:`);
  // FIXME This needs to pull groupId and artifactId out of pom file
  const cmd = `mvn dependency:get -Dartifact=folkforms:example:${version} > /dev/null 2>&1`;
  let throwError = true;
  let r = 1;
  try {
    console.debug(`DEBUG:     cmd = ${cmd}`);
    r = shell.exec(cmd).code;
    console.debug(`DEBUG:     dependency:get found an existing version with that version number`);
    throwError = true;
  } catch (error) {
    console.debug(`DEBUG:     dependency:get did not find an existing version with that version number`);
    throwError = false;
    r = 0;
  }

  if(throwError || r.code !== 0) {
    throw new Error(`Version ${version} already exists.`);
  }
}

module.exports = checkIfVersionAlreadyExists;
