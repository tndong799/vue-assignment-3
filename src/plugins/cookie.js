import Cookies from 'js-cookie'

export const setToken = (token) => {
    return Cookies.set('access_token', token, {expires: 1, path: ''})
}

export const getToken = () => {
    return Cookies.get('access_token')
}

export const removeToken = () => {
    Cookies.remove('access_token',{path: ''})
}


