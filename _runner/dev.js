const concurrently = require("concurrently");
const chalk = require("chalk");
const dotenv = require("dotenv");
const path = require("path");
const scripts = require("../scripts.json");
const relativePath = (p) => path.join(path.dirname(__filename), p);

// map scripts to correct directories:
const basicCommands = {};
for (const scriptKey in scripts) {
  const script = scripts[scriptKey];
  if (!script.path) {
    basicCommands[scriptKey] = script;
    continue;
  }

  const rp = relativePath("../" + script.path);
  basicCommands[scriptKey] = {
    ...script,
    path: rp,
    command: `cd ${rp} && ${script.command}`,
    install: `cd ${rp} && ${script.install}`,
  };
}

// load env variables + check if vars loaded
const fileEnvVars = dotenv.config({
  path: relativePath("../.env"),
});

if (!fileEnvVars.parsed) {
  console.log(
    chalk.bgRed.whiteBright.bold(
      "\n\n                     NO .ENV VARIABLES FOUND                     "
    )
  );
  console.log(
    chalk.whiteBright.bold(
      "    Make sure they're in .env in the root of the repository!\n\n"
    )
  );
  process.exit(1);
}

// if --only, then only run those commands
const onlyCommands = process.argv.includes("--only")
  ? process.argv
      .find((arg, index, args) => {
        if (index === 0) return false;
        if (args[index - 1] === "--only") return true;
      })
      ?.split(",") ?? []
  : Object.keys(basicCommands);

let commands = [];

// push commands to array
for (const basicCommandsKey in basicCommands) {
  if (!onlyCommands.includes(basicCommandsKey)) continue;
  commands.push({
    name: basicCommandsKey,
    prefixColor: basicCommands[basicCommandsKey].color,
    command: basicCommands[basicCommandsKey].command,
  });
}

// run commands
if (commands.length) concurrently(commands);
else {
  console.log("Could not find commands for ", onlyCommands);
}
