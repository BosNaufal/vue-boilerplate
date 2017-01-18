
function capitalize(val) {
  var firstLetter = val.substr(0,1);
  var others = val.substr(1, val.length);
  return firstLetter.toUpperCase() + others;
}

module.exports = function template(type) {
  return "\/\/ import " + type + "s from '../" + type + "s.js'\n\n\/\/ const { some" + capitalize(type) + " } = " + type + "s\n"
}
