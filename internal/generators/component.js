
// Node Modules
var fs = require('fs');
var inquirer = require('inquirer');
var Handlebars = require('handlebars');

// Paths
var basePath = __dirname + "/../../app/";

// Utils
var renderTemplate = require('../utils.js').renderTemplate;

// Templates
var vueComponentTemplate = renderTemplate(__dirname + '/../templates/vueComponent.hbs');
var componentTest = require('../templates/componentTest.hbs');


function getLocation (value) {
  return basePath + 'components/' + value;
}

function generate (name) {
  var location = getLocation(name)
  fs.mkdirSync(location);
  fs.writeFileSync(location + '/index.vue', vueComponentTemplate({ name:name }));
  fs.writeFileSync(location + '/style.sass', "");

  var testLocation = location + '/tests';
  fs.mkdirSync(testLocation);
  fs.writeFileSync(testLocation + '/index.spec.js', componentTest({ name:name }));
}

function goToClui () {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Component Name:",
      validate: function (value) {
        if (!value.length) return 'Please Fill The Component Name...'
        var location = getLocation(value);
        var existed = fs.existsSync(location);
        if (existed) return 'Component Existed...'
        return true
      }
    },
  ]).then(function(answer) {
    var name = answer.name;
    return generate(name);
  })
}


module.exports = function generateComponent(name) {

  if (!name) return goToClui()
  else return generate(name)

}
