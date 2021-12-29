#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const shelljs = require("shelljs");
const { dryRunShellJs } = require("dummy-shells");
const javaRelease = require("./java-release");

program
  .option('-v, --verify', 'verify that the project can be released')
  .option('-i, --install <version>', 'release a new version of the code locally')
  .option('-r, --release <version>', 'release a new version of the code to the public maven repo')
  .option('-n, --dry-run', 'show the commands that would be run, without actually running anything')
  .option('-d, --debug', 'print debugging information')
  .parse(process.argv);

// // FIXME Proper error message if file not found.
// // FIXME Add option to generate config file.
// const configFile = fileio.glob("./*.release.json")[0];
// const config = fileio.readJson(configFile);

let mode = "verify";
let version = null;
if(program.opts().release) {
  mode = "release";
  version = program.opts().release;
}
if(program.opts().install) {
  mode = "install";
  version = program.opts().install;
}

const options = {
  mode,
  version,
  dryRun: program.opts().dryRun,
  debug: program.opts().debug,
}

const shell = program.opts().dryRun ? dryRunShellJs : shelljs;

return javaRelease(shell, options);
