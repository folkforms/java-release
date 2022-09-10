const shellWrapper = require("./shell-wrapper");
const validateEnvVars = require("./modules/validateEnvVars");
const mavenVerify = require("./modules/mavenVerify");
const mavenList = require("./modules/mavenList");
const checkIfVersionAlreadyExists = require("./modules/checkIfVersionAlreadyExists");
const mavenRelease = require("./modules/mavenRelease");

let shell;
let options;
const javaRelease = (shellObj, optionsObj) => {
  if(!optionsObj.debug) {
    console.debug = () => {};
  }
  console.debug(`DEBUG: options = ${JSON.stringify(optionsObj)}`);
  shell = shellWrapper(shellObj);
  options = optionsObj;

  validateEnvVars();
  if(options.testMode) { shell.cd("example"); }
  switch(options.mode) {
    case "verify":
      mavenVerify(shell, options);
      break;
    case "list":
      mavenList(shell, options);
      break;
    case "check":
      checkIfVersionAlreadyExists(options);
      break;
    case "install":
      mavenRelease("install", shell, options);
      break;
    case "release":
      mavenRelease("deploy", shell, options);
      break;
  }
  if(options.testMode) { shell.cd(".."); }

  return 0;
}

module.exports = javaRelease;
