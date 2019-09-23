import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 2000
});

// 请求拦截器
instance.interceptors.request.use((config) =>{
    return config;
  }, (error)=> {
  
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use( response =>{
    if(response.status !== 200 ){
      console.log(response.status)
    }
    return response.data;
  },  (error) =>{
    try {
      console.log(error);
  }
  catch(err) {
      console.log(err)
  }
    return Promise.reject(error);
  }
);

export default instance;