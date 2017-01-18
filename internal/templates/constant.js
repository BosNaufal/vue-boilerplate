
module.exports = function template(name) {
  return "// ACTIONS\n"+
  "export const SOME_ACTION = 'containers/" + name + "/SOME_ACTION'\n\n"+
  "// MUTATIONS\n" +
  "export const SOME_MUTATION = 'containers/" + name + "/SOME_MUTATION'\n\n" +
  "// GETTERS\n" +
  "export const SOME_GETTER = 'containers/" + name + "/SOME_GETTER'\n"
}
