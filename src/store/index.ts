import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import {IState} from "@/store/index.types";

Vue.use(Vuex)

export default new Vuex.Store<IState>({
  state: {
    taskList: [],
    redactIdTask: null
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
