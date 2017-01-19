
module.exports = function template(name) {
  return "\n\nconst NAMESPACE = 'containers/" + name + "'\n\n// ACTIONS\n"+
  "export const SOME_ACTION = `${NAMESPACE}/SOME_ACTION`\n\n"+
  "// MUTATIONS\n" +
  "export const SOME_MUTATION = `${NAMESPACE}/SOME_MUTATION`\n\n" +
  "// GETTERS\n" +
  "export const SOME_GETTER = `${NAMESPACE}/SOME_GETTER`\n"
}
