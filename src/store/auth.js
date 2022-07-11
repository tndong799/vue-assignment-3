import api from "@/plugins/api";
import {getToken, removeToken, setToken} from "@/plugins/cookie";

const state = {
  user: null,
};

const getters = {
  isAuthenticated(state) {
    return state.user ? true : false;
  },
  getUser(state) {
    return state.user
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

const actions = {
  // async fetchUser({ commit }, payload) {
  //   try {
  //     let res = await api.fetchUser()
  //     let { user } = res 
  //     if( user ){
  //       commit('setUser',user )
  //     }
  //   } catch (error) {
  //     throw error 
  //   }
  // },
  // async fetchListUser({} , payload){
  //   try {
  //     return await api.fetchListUser(payload)
  //   } catch (error) {
  //     throw error 
  //   }
  // },
  logoutUser({commit}){
    removeToken();
    commit('setUser', null);
  },

  async registerUser({}, payload){
    try {
      return await api.registerUser(payload);
    } catch (error) {
        throw error 
    }
  },

  async loginUser({commit, dispatch}, payload){
    try {
      let {data: {status, data}} = await api.loginUser(payload);
      if(status){
        setToken(data.token);
      }
      
      return await dispatch('loadUser')
      
    } catch (error) {
        throw error 
    }
  },
  async loadUser({commit}){
    if(!getToken()){
      return
    }
    try {
      let res = await api.loadUser();
      if(res.status){
        commit('setUser', res.data);
      }else{
        removeToken();
      }
      return res
    } catch (error) {
      removeToken();
      throw error
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
};
