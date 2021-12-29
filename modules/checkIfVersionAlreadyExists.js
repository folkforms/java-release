const { XMLParser } = require("fast-xml-parser");
const fileio = require("@folkforms/file-io");

const checkIfVersionAlreadyExists = (shell, options) => {
  console.debug(`DEBUG: checkIfVersionAlreadyExists:`);
  const parser = new XMLParser();
  const xml = parser.parse(fileio.readLinesAsString("pom.xml"));
  const groupId = xml.project.groupId;
  const artifactId = xml.project.artifactId;
  const version = options.version;
  const folder = `${process.env.MAVEN_REPO.replace(/\\/g, "/")}/${groupId.replace(/\./g, "/")}/${artifactId}/${version}`;
  console.debug(`DEBUG:     folder = ${folder}`);
  const glob = fileio.glob(`${folder}/*.jar`);
  console.debug(`DEBUG:     glob = ${JSON.stringify(glob)}`);
  if(glob.length > 0) {
    throw new Error(`Version ${options.version} already exists.`);
  }
}

module.exports = checkIfVersionAlreadyExists;
