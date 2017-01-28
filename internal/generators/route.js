
var fs = require('fs');
var inquirer = require('inquirer');
var Handlebars = require('handlebars');
var routeTemplate = require('../templates/route.hbs')
var appendText = require('../utils.js').appendText
var basePath = __dirname + "/../../app/";

function generate (path, type, name) {
  // Append Route Statement
  var textToSearch = "\n  { path: '*',"
  var isContainer = type === 'Container'
  var textToAdd = routeTemplate({ path: path, name: name, container: isContainer })
  appendText('routes.js', textToSearch, textToAdd)
}

function goToClui() {
  let allAnswer = {};
  return inquirer.prompt([
    {
      type: "input",
      name: "path",
      message: "Route Path:",
      validate: function (value) {
        if (!value.length) return 'Please Fill The Route Path...'
        return true
      }
    },
    {
      type: "list",
      name: "type",
      message: "What do you want to show in this route:",
      choices: ['Component', 'Container']
    }
  ]).then(function({ path, type }) {
    allAnswer = { path: path, type: type };

    return inquirer.prompt([{
      type: "input",
      name: "name",
      message: "What's the " + type + " Name:",
      validate: function (value) {
        if (!value.length) return 'Please The Name...'
        var location = basePath + type.toLowerCase() + 's/' + value + '/index.vue'
        var existed = fs.existsSync(location)
        if (!existed) return type + ' Not Found...'
        return true
      }
    }])

  }).then(({ name }) => {
    return generate(allAnswer.path, allAnswer.type, name)
  })
}

module.exports = function generateContainer(name) {
  if (!name) return goToClui()
  else return generate(name)
}
