
function capitalize(val) {
  var firstLetter = val.substr(0,1);
  var others = val.substr(1, val.length);
  return firstLetter.toUpperCase() + others;
}

module.exports = function template(type) {
  return "\n"+
  '// '+ capitalize(type) +' Specs\n'+
  '\n'+
  '// import { expect } from \'chai\';\n'+
  (type === 'action' ? '// import { put, call } from \'vuex-saga\';\n' : '') +
  '\n'+
  "// import " + type + "s from '../" + type + "s.js'\n"+
  "// const { some" + capitalize(type) + " } = " + type + "s\n"
}
