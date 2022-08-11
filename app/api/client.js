// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import cache from '../utility/cache';
// define the api
const api = create({
  baseURL: 'http://192.168.0.102:9000/api',
//   headers: { Accept: 'application/vnd.github.v3+json' },
})

const get = api.get;
api.get = async (url, params, axiosConfig)=>{
  const response = await get(url, params, axiosConfig);;
  if (response.ok) {
    cache.storeData(url, response.data);
    return response;
  }
  const data = await cache.getData(url);
  return data ? {ok: true, data} : response;
}

export default api;

