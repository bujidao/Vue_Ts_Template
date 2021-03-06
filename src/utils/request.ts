import axios from 'axios'

interface MyMap {
  [key: string]: any;
}

/**
 * api字典表
 * @param apiModel api模式
 * @returns 
 */
const getUrl = (apiModel?: string) => {
  const apiModels: MyMap = {
    WisdomNavigation: process.env.VUE_APP_WISDOM_NAVIGATION_API,
    default: process.env.VUE_APP_BASE_API
  }
  if (!apiModel) {
    return apiModels['default']
  }
  return apiModels[apiModel] ? apiModels[apiModel] : apiModels['default']
}

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30 * 1000 // request timeout
})

// service.interceptors.request.

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = getUrl(config.apiModel)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
