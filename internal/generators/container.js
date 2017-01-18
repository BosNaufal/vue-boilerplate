
var fs = require('fs');
var inquirer = require('inquirer');

var basePath = __dirname + "/../../app/";
var vueComponentTemplate = require('../templates/vueComponent.js');
var componentTest = require('../templates/componentTest.js');
var vuexTest = require('../templates/vuexTest.js');
var constantTemplate = require('../templates/constant.js');
var actionTemplate = require('../templates/action.js');
var mutationTemplate = require('../templates/mutation.js');
var getterTemplate = require('../templates/getter.js');
var moduleTemplate = require('../templates/module.js');

var appendText = require('../utils.js').appendText

function getLocation (value) {
  return basePath + 'containers/' + value;
}

function generate (name) {
  var location = getLocation(name)
  fs.mkdirSync(location);
  fs.writeFileSync(location + '/index.vue', vueComponentTemplate(name, true));
  fs.writeFileSync(location + '/constants.js', constantTemplate(name));
  fs.writeFileSync(location + '/actions.js', actionTemplate);
  fs.writeFileSync(location + '/getters.js', getterTemplate);
  fs.writeFileSync(location + '/mutations.js', mutationTemplate);
  fs.writeFileSync(location + '/module.js', moduleTemplate);

  var testLocation = location + '/tests';
  fs.mkdirSync(testLocation);
  fs.writeFileSync(testLocation + '/index.spec.js', componentTest(name));
  fs.writeFileSync(testLocation + '/actions.spec.js', vuexTest('action'));
  fs.writeFileSync(testLocation + '/mutations.spec.js', vuexTest('mutation'));
  fs.writeFileSync(testLocation + '/getters.spec.js', vuexTest('getter'));

  // Append Import Statement
  var textToSearch = '\nVue.use(Vuex)'
  var textToAdd = "import " + name + " from './containers/" + name + "/module'\n"
  appendText('store.js', textToSearch, textToAdd)

  // Append Register Statement
  textToSearch = '\n  },\n  strict: true'
  textToAdd = ",\n    " + name
  appendText('store.js', textToSearch, textToAdd)
}

function goToClui() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Container Name:",
      validate: function (value) {
        if (!value.length) return 'Please Fill The Container Name...'
        var location = getLocation(value);
        var existed = fs.existsSync(location);
        if (existed) return 'Container Existed...'
        return true
      }
    },
  ]).then(function(answer) {
    var name = answer.name;
    return generate(name)
  })
}

module.exports = function generateContainer(name) {
  if (!name) return goToClui()
  else return generate(name)
}
