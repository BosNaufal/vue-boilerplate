
var fs = require('fs');
var Handlebars = require('handlebars');

var basePath = __dirname + "/../app/";

// Append Text to File
var utils = {

  appendText(fileName, textToSearch, textToAdd) {
    var base = fs.readFileSync(basePath + fileName).toString()
    var position = base.indexOf(textToSearch)
    var upperPart = base.substr(0, position)
    var bottomPart = base.substr(position, base.length)
    var combine = upperPart + textToAdd + bottomPart
    fs.writeFileSync(basePath + fileName, combine);
    return combine
  },

  renderTemplate(location) {
    var templateString = fs.readFileSync(location).toString()
    template = Handlebars.compile(templateString)
    return template
  }

}

module.exports = utils
