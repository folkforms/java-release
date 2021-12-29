const fileio = require("@folkforms/file-io");

/**
 * Validate that required environment variables are present.
 */
const validateEnvVars = () => {
  // const dropbox = process.env["DROPBOX"];
  // const sandboxRepo = process.env["SANDBOX_REPO"];
  // const devRepo = process.env["DEV_REPO"];
  const mavenRepo = process.env["MAVEN_REPO"];

  console.debug(`DEBUG: validateEnvVars:`);
  // console.debug(`DEBUG:     DROPBOX = '${dropbox}'`);
  // console.debug(`DEBUG:     SANDBOX_REPO = '${sandboxRepo}'`);
  // console.debug(`DEBUG:     DEV_REPO = '${devRepo}'`);
  console.debug(`DEBUG:     MAVEN_REPO = '${mavenRepo}'`);

  // if(!dropbox)                    { throw new Error("Environment variable 'DROPBOX' is not defined."); }
  // if(!fileio.exists(dropbox))     { throw new Error(`env.DROPBOX folder '${dropbox}' does not exist.`); }
  // if(!sandboxRepo)                { throw new Error("Environment variable 'SANDBOX_REPO' is not defined."); }
  // if(!fileio.exists(sandboxRepo)) { throw new Error(`env.SANDBOX_REPO folder '${sandboxRepo}' does not exist.`); }
  // if(!devRepo)                    { throw new Error("Environment variable 'DEV_REPO' is not defined."); }
  // if(!fileio.exists(devRepo))     { throw new Error(`env.DEV_REPO folder '${devRepo}' does not exist.`); }
  if(!mavenRepo)                  { throw new Error("Environment variable 'MAVEN_REPO' is not defined."); }
  if(!fileio.exists(mavenRepo))   { throw new Error(`env.MAVEN_REPO folder '${mavenRepo}' does not exist.`); }
}

module.exports = validateEnvVars;
