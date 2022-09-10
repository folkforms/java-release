const { XMLParser } = require("fast-xml-parser");
const fileio = require("@folkforms/file-io");

const mavenList = (shell, options) => {
  console.debug(`DEBUG: mavenList:`);
  const parser = new XMLParser();
  const xml = parser.parse(fileio.readLinesAsString("pom.xml"));
  const groupId = xml.project.groupId;
  const artifactId = xml.project.artifactId;
  const folder = `${process.env.MAVEN_REPO.replace(/\\/g, "/")}/${groupId.replace(/\./g, "/")}/${artifactId}`;
  console.debug(`DEBUG:     folder = ${folder}`);
  const cmd = `ls -1 ${folder}`;
  console.debug(`DEBUG:     cmd = ${cmd}`);
  shell.exec(cmd);
}

module.exports = mavenList;
