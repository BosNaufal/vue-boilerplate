
var fs = require('fs');
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
  }

}

module.exports = utils
