
module.exports = function template(name, container) {
  var style = '\n<style lang="sass" scoped>\n'+
  '  @import ".\/style.sass"\n'+
  '</style>\n';

  return '\n'+
  '<template>\n'+
  '  <div' + (!container ? ' class="Root"' : '') + '>\n'+
  '    <h1>' + (container ? "Container" : "Component") + ': '+name+'</h1>\n'+
  '  </div>\n'+
  '</template>\n\n'+
  '<script>\n\n'+
  '  export default {\n\n\n\n  }\n\n'+
  '</script>\n'+ (!container ? style : '')

};
