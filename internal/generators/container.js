
// Node Modules
var fs = require('fs');
var inquirer = require('inquirer');
var Handlebars = require('handlebars');

// Utils
var appendText = require('../utils.js').appendText;
var renderTemplate = require('../utils.js').renderTemplate;

// Paths
var basePath = __dirname + "/../../app/";

// Templates
var vueComponentTemplate = renderTemplate(__dirname + '/../templates/vueComponent.hbs');
var componentTest = require('../templates/componentTest.hbs');
var vuexTest = require('../templates/vuexTest.hbs');
var constantTemplate = require('../templates/constant.hbs');
var actionTemplate = require('../templates/action.hbs');
var mutationTemplate = require('../templates/mutation.hbs');
var getterTemplate = require('../templates/getter.hbs');
var moduleTemplate = require('../templates/module.hbs');


function getLocation (value) {
  return basePath + 'containers/' + value;
}

function generate (name) {
  // Location Checking
  var location = getLocation(name);
  var existed = fs.existsSync(location);
  if (existed) return console.log('Container Existed...');

  // Make A Directory
  fs.mkdirSync(location);

  // Primary Files
  fs.writeFileSync(location + '/index.vue', vueComponentTemplate({ name: name, container: true }));
  fs.writeFileSync(location + '/constants.js', constantTemplate({ name: name }));
  fs.writeFileSync(location + '/actions.js', actionTemplate());
  fs.writeFileSync(location + '/getters.js', getterTemplate());
  fs.writeFileSync(location + '/mutations.js', mutationTemplate());
  fs.writeFileSync(location + '/module.js', moduleTemplate());

  // Test Files
  var testLocation = location + '/tests';
  fs.mkdirSync(testLocation);
  fs.writeFileSync(testLocation + '/index.spec.js', componentTest({ name: name, container: true }));
  fs.writeFileSync(testLocation + '/actions.spec.js', vuexTest({name:name, type: 'action', capitalize: 'Action', action: true}));
  fs.writeFileSync(testLocation + '/mutations.spec.js', vuexTest({name:name, type: 'mutation', capitalize: 'Mutation'}));
  fs.writeFileSync(testLocation + '/getters.spec.js', vuexTest({name:name, type: 'getter', capitalize: 'Getter'}));

  // Append Import Statement
  // var textToSearch = '\nVue.use(Vuex)'
  // var textToAdd = "import " + name + " from './containers/" + name + "/module'\n"
  // appendText('store.js', textToSearch, textToAdd)

  // Append Register Statement
  // textToSearch = '\n  },\n  strict: true'
  // textToAdd = ",\n    " + name
  // appendText('store.js', textToSearch, textToAdd)
}


// Clui Questions
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
