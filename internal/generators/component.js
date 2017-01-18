
var fs = require('fs');
var inquirer = require('inquirer');

var basePath = __dirname + "/../../app/";
var vueComponentTemplate = require('../templates/vueComponent.js');
var componentTest = require('../templates/componentTest.js');

function getLocation (value) {
  return basePath + 'components/' + value;
}

function generate (name) {
  var location = getLocation(name)
  fs.mkdirSync(location);
  fs.writeFileSync(location + '/index.vue', vueComponentTemplate(name));
  fs.writeFileSync(location + '/style.sass', "");

  var testLocation = location + '/tests';
  fs.mkdirSync(testLocation);
  fs.writeFileSync(testLocation + '/index.spec.js', componentTest(name));
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
