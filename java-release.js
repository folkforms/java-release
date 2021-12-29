const shellWrapper = require("./shell-wrapper");
const validateEnvVars = require("./modules/validateEnvVars");
const mavenVerify = require("./modules/mavenVerify");
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
  switch(options.mode) {
    case "verify":
      mavenVerify(shell, options);
      break;
    case "install":
      mavenRelease("install", shell, options);
      break;
    case "release":
      mavenRelease("deploy", shell, options);
      break;
  }

  return 0;
}

module.exports = javaRelease;
