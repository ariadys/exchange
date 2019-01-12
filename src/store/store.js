import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		idrs: '150000'
	},
	mutations: {
    change(state, idrs) {
      	state.idrs = idrs
    }
  	},
  	getters: {
    	idrs: state => state.idrs
  	}
})