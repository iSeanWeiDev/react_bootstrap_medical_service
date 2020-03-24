import apisauce from 'apisauce'

const Config = {
  API_URL: 'https://cors-anywhere.herokuapp.com/https://iterex-backend-staging.herokuapp.com/api/v2'
};


const authMiddleWare = (api, payload, method, url) => {
  api.setHeader('Authorization', localStorage.getItem('access_token'))

  console.log('authmiddleware', localStorage.getItem('access_token'));

  if(method === 'get') {
    return api.get(url, payload).then(res1=>{
      if(res1.data.message === "Provide a valid token.") {
        api.setHeader('Authorization', localStorage.getItem('refresh_token'))
        return api.get('/auth/refresh').then(authRes=> {
          if(authRes.ok) {
            localStorage.setItem('access_token', authRes.data.response.access_token);
            api.setHeader('Authorization', authRes.data.response.access_token)
            return api.get(url, payload)
          }
        })
      } else {
        return res1
      }
    });
  }
  if(method === 'post') {
    return api.post(url, payload).then(res1=>{
      if(res1.data.message === "Provide a valid token.") {
        api.setHeader('Authorization', localStorage.getItem('refresh_token'))
        return api.get('/auth/refresh').then(authRes=> {
          if(authRes.ok) {
            localStorage.setItem('access_token', authRes.data.response.access_token);
            api.setHeader('Authorization', authRes.data.response.access_token)
            return api.post(url, payload)
          }
        })
      } else {
        return res1
      }
    });
  }
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
  const getUserInfo = () => authMiddleWare(api, null, 'get', '/userinfo');


  // get profile
  const getProfile = () => authMiddleWare(api, null, 'get', '/health/profile');
  const editProfile = (payload) => authMiddleWare(api, null, 'get', payload.url);

  // screening
  const getScreening = payload => authMiddleWare(api, payload, 'get', `/health/question`); 
  const nextQuestion = payload => authMiddleWare(api, null, 'get', payload.url);
  const previousQuestion = payload => authMiddleWare(api, null, 'get', payload.url);
  const saveAnswer = payload => authMiddleWare(api, payload, 'post', '/health/answer');
  const prediction = payload => authMiddleWare(api, null, 'get', payload.url);

  return {
    postSignin,
    postSingup,
    getUserInfo,

    getProfile,
    editProfile,

    getScreening,
    nextQuestion,
    previousQuestion,
    saveAnswer,
    prediction
  }
}

export default {
    create
}