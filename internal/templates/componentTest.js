
module.exports = function template(name) {
  return '\n'+
  '// '+ name +' Component Specs\n'+
  '\n'+
  '//import { expect } from \'chai\';\n'+
  '\n'+
  '//import shallow from \'../../../utils/componentTest.js\';\n'+
  '//import Component from \'../index.vue\';\n'+
  '\n/*'+
  'describe(\'components/'+ name +'\', function () {\n'+
  '\n'+
  '  let vm;\n'+
  '  beforeEach(function () {\n'+
  '    vm = shallow(Component)\n'+
  '  })\n'+
  '\n'+
  '  it(\'Some Test\', function () {\n'+
  '    const actual = true\n'+
  '    expect(actual).to.be.equal(true)\n'+
  '  })\n'+
  '\n'+
  '})\n*/'
}
