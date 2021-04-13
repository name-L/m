import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000, // 请求超时 时间
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1582552258335007449276","bc":"310100"}'
  }
})
export default instance
