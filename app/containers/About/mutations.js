
import {
  SOME_MUTATION
} from './constants'

const state = {
  someState: ''
};

const mutations = {
  [SOME_MUTATION] (state, payload) {
    // Mutate State Here...
  }
}

export { state, mutations }
