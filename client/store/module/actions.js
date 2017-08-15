export const Actions = ({
  signIn : ({commit}, payload) => {
    axios.post('http://localhost:3000/users/signin',{
      username: payload.username,
      password: payload: password
    })
    .then((response) => {
      console.log('Ini data action signin', response.data);
      commit('signIn', response.data)
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  signUp: ({commit}, payload) => {
    axios.post('http://localhost:3000/users/signup', {
      name: payload.name,
      username: payload.username,
      password: payload.password,
      email: payload.email
    })
    .then( (response) => {
      console.log('Ini data action signup', response.data);
      commit('signUp', response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  },
  dataArticles: ({commit}) => {
    axios.get('http://localhost:3000/articles/')
    .then( (response) => {
      console.log('Ini data articles', response.data);
      commit('dataArticle', response.data)
    })
  },
  detailArticle: ({commit},payload) => {
    axios.get(`http://localhost:3000/articles/${payload}`)
    .then( (response) => {
      console.log('ini data one article', response.data);
      commit('detailArticle', response.data)
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  dataArticleByAuthor: ({commit}, payload) => {
    axios.get(`http://localhost:3000/articles/articlebyauthor/${payload}`)
    .then( (response) => {
      console.log('Ini data article by author', response.data);
      commit('dataArticleByAuthor', response.data)
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  newArticle: ({commit}, payload) => {
    axios.post('http://localhost:3000/articles', {
      title: payload.title,
      content: payload.content,
      category: payload.category,
      author: payload.author
    })
    .then( (response) =>{
      console.log('Ini data article baru', response.data);
      commit('newArticle', response.data)
    })
    .catch( (err) => {
      console.log(err);
    })
  },
  editArticle: ({commit},satte) => {
    axios.put(`http://localhost:3000/articles/${payload.id}`)
  }
  deleteArticle: ({commit}, payload) => {
    axios.delete(`http://localhost:3000/articles/${payload}`)
    .then( (response) => {
      console.log('ini data yang di hapus', response.data);
      commit('deleteArticle', response.data)
    })
    .catch( (err) => {
      console.log(err);
    })
  }
})
