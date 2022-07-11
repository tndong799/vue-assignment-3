import axios from "./axios";

const api = {
  get(url, params = {}, cancel_token = null) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          cancelToken: cancel_token ? cancel_token.token : null,
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            return reject("canceled");
          }
          reject(err);
        });
    });
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url,data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            return reject("canceled");
          }
          reject(err);
        })
    })
  },

  put(url, data = {}) {},

  delete(url, data = {}) {},
};

export default {
  // getUser (payload) {
  //   let { id } = payload 
  //   return api.get(`/use/${id}`, { id })
  // },
  // getListUser(payload){
  //   let { page = 1, sort ='A-Z' , search  = 'name' } = payload 
  //   return api.get('/users',  { page , sort , search })
  // },
  loadUser(payload){
    return api.get('user')
  },
  registerUser(payload){
    let {email, password, name} = payload
    let timezone = new Date().toLocaleDateString('en-US',{timeZone: 'Asia/Bangkok'})
    return api.post('sign-up', {email, password, timezone, name})
  },
  loginUser(payload){
    let {email, password} = payload
    let timezone = new Date().toLocaleDateString('en-US',{timeZone: 'Asia/Bangkok'})
    return api.post('sign-in', {email, password, timezone})
  }
};
