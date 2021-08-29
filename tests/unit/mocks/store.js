import Vuex from 'vuex';
import github from '@/store/github';
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    github,
  },
});
