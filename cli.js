#!/usr/bin/env node

const { Command, Option } = require("commander");
const program = new Command();
const shelljs = require("shelljs");
const { dryRunShellJs } = require("dummy-shells");
const javaRelease = require("./java-release");

program
  .option('-v, --verify', 'verify that the project can be released')
  .option('-c, --check <version>', 'check if the given version already exists')
  .option('-i, --install <version>', 'release a new version of the code locally')
  .option('-r, --release <version>', 'release a new version of the code to the public maven repo')
  .option('-p, --pom', 'print pom file that can be used for typical release setup')
  .option('-n, --dry-run', 'show the commands that would be run, without actually running anything')
  .option('-d, --debug', 'print debugging information')
  .addOption(new Option('--test-mode').hideHelp())
  .parse(process.argv);

if(program.opts().pom) {
  console.info("See Dropbox/programming/snippets/maven/pom.xml");
  return 0;
}

let mode = "verify";
let version = null;
if(program.opts().check) {
  mode = "check";
  version = program.opts().check;
}
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
  testMode: program.opts().testMode,
}

const shell = program.opts().dryRun ? dryRunShellJs : shelljs;

const code = javaRelease(shell, options);
process.exit(code);
