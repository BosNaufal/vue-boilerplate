
export default function (injects) {

  const injections = {
    'vuex': {
      mapState: () => {},
      mapActions: () => {},
      mapGetters: () => {}
    },
    'vuex-saga': {
      mapSagas: () => {}
    }
  }

  if (!injects) return injections

  if (injects['sagas']) injections['vuex-saga'].mapSagas = () => injects['sagas']
  if (injects['states']) injections['vuex'].mapStates = () => injects['states']
  if (injects['actions']) injections['vuex'].mapStates = () => injects['actions']
  if (injects['getters']) injections['vuex'].mapStates = () => injects['getters']

  return injections

}
