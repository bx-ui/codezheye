import { createStore } from 'vuex'
import { loginIn, loadUserInfo } from '@/api/user.ts'
import Cookies from 'js-cookie'
export interface RootState {
  token: '';
  column: string;
  email: string;
  nickName: string;
  _id: string;
}

export default createStore<RootState>({
  state: {
    token: '',
    column: '',
    email: '',
    nickName: '',
    _id: ''
  },
  mutations: {
    saveToken (state, token) {
      console.log(state)
      state.token = token
    },
    saveInfo (state, { column, email, nickName, _id }) {
      state.column = column
      state.email = email
      state.nickName = nickName
      state._id = _id
    }
  },
  actions: {
    userLogin ({ commit }, { email, password }) {
      return new Promise<void>(resolve => {
        loginIn({ email, password }).then(res => {
          const token = res.data.token
          commit('saveToken', token)
          Cookies.set('token', token)
          resolve()
        })
      })
    },
    userInfo ({ commit }) {
      loadUserInfo().then(res => {
        const { column, email, nickName, _id } = res.data
        Cookies.set('column', column)
        Cookies.set('email', email)
        Cookies.set('nickName', nickName)
        Cookies.set('_id', _id)
        commit('saveInfo', res.data)
      })
    }
  }
})
