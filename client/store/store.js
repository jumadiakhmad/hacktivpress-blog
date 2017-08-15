import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './modules/actions'
import * as actions from './modules/actions'
import * as actions from './modules/getters'

Vue.use(vuex)

export const store = new Vuex.Store*({
  state: {
    user: [],
    signIn: [],
    dataArticles: [],
    dataArticleByAuthor: [],
    detailArticle: []
  },
  getters: getters.Getters,
  mutations: mutations.Mutations,
  actions: actions.Actions
})
