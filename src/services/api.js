import apisauce from 'apisauce'

const Config = {
  API_URL: 'https://cors-anywhere.herokuapp.com/https://iterex-backend-staging.herokuapp.com/api/v2'
};

const authenticated = api => {
  api.setHeader('Authorization', localStorage.getItem('jwt'))
  return api
}

const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      // 50 second timeout...
    timeout: 50000,
  })

  // auth
  const postSignin = payload => api.post('/auth/login', payload);
  const postSingup = payload => api.post('/auth/create', payload);

  // get profile
  const getProfile = () => authenticated(api).get('/user/profile');

  const getScreening = payload => authenticated(api).get('/health/question', payload); 

  return {
    postSignin,
    postSingup,
    getProfile,
    getScreening
  }
}

export default {
    create
}