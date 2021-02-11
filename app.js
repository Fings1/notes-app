// Libraries
const chalk = require("chalk");
const yargs = require("yargs");

// Modules
const getNotes = require("./notes");

// Custom version
yargs.version("1.0.1");

// Commands

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title ",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body ",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Note description ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("ADDING A NEW NOTE !!", argv.title);
    console.log("ADDING A NEW NOTE  BODY!!", argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("REMOVING THE NOTE !!");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: () => {
    console.log("LISTING THE NOTES !!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("READING THE NOTE !!");
  },
});

yargs.parse();
