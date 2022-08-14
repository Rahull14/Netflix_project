import axios from 'axios'
import {baseUrl} from './Constants/constantsss'
const instance = axios.create({
    baseURL: baseUrl,
  });
  
  
  export default instance
  
  