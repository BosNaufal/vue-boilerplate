
module.exports = "\nimport {\n" +
"  SOME_MUTATION\n" +
"} from './constants'\n\n" +
"const state = {\n" +
"  someState: ''\n" +
"};\n\n" +
"const mutations = {\n" +
"  [SOME_MUTATION] (state, payload) {\n" +
"    // Mutate State Here...\n" +
"  }\n" +
"}\n\n" +
"export { state, mutations }\n";
