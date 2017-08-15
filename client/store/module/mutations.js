export const Mutations = {
  signIn: (state,payload) => {
    window.localStorage.setItem('token', payload.token)
    window.localStorage.setItem('user', payload.username)
    window.localStorage.setItem('id', payload.id)
    window.localStorage.setItem('email', payload.email)
    window.localStorage.setItem('login_method', 'local');
    state.user.push(payload)
    window.location = "/"
  },
  signUp: (state,payload) => {
    state.user.push(payload)
  },
  dataArticles: (state,payload) => {
    state.dataArticles = payload
  },
  detailArticle: (state, payload) => {
    state.detailArticle = payload
  },
  dataArticleByAuthor: (state,payload) => {
    state.dataArticleByAuthor = payload
  },
  editArticle: (state, payload) => {
    // state.dataArticles = payload
    var index = state.dataArticles.findIndex( a => a._id == payload._id )
    if(index != 1) {
     state.dataArticles.splice(index, 1, payload)
    }
  },
  deleteArticle: (state,payload) => {
    console.log('data payload ');
    var newArticle = state.dataArticles.filter( a => a._id !== payload._id)
    state.dataArticles = newArticle
  }
}
