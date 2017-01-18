
module.exports = function template(name) {
  return '\n'+
  '<template>\n'+
  '  <div class="Root">\n'+
  '    <h1>Component: '+name+'</h1>\n'+
  '  </div>\n'+
  '</template>\n\n'+
  '<script>\n\n'+
  '  export default {\n\n\n\n}\n'+
  '</script>\n\n'+
  '<style lang="sass" scoped>\n'+
  ' @import ".\/style.sass"\n'+
  '</style>\n'
};
