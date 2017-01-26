// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
// http://stackoverflow.com/questions/23036918/in-node-js-how-to-read-a-file-append-a-string-at-a-specified-line-or-delete-a


var fs = require('fs');
var clear = require('clear');
var figlet = require('figlet');
var chalk = require('chalk');
var inquirer = require('inquirer');
var argv = require('minimist')(process.argv.slice(2))._;

var generateComponent = require('./generators/component.js')
var generateContainer = require('./generators/container.js')
var generateRoute = require('./generators/route.js')

// Main Menu
function mainMenu() {
  clear();

  // Logo
  var art = figlet.textSync('Vue Gen')
  var colorize = chalk.bold.green(art);
  console.log(colorize);

  return inquirer.prompt([{
    type: "list",
    name: "action",
    message: "What do you want to make:",
    choices: ['Component', 'Container', 'Route']
  }]).then(function(answer) {
    var action = answer.action

    switch (action) {
      case 'Component': {
        return generateComponent()
        break;
      }
      case 'Container': {
        return generateContainer()
        break;
      }
      case 'Route': {
        return generateRoute()
        break;
      }
    }
  })
}

// If No Arguments, Go To Clui
if (!argv.length) mainMenu();
else {
  var action = argv[0];
  var name = argv[1];
  if (action === 'component' || action === 'com') return generateComponent(name)
  if (action === 'container' || action === 'con') return generateContainer(name)
  else console.log("Command Not Found...");
}
