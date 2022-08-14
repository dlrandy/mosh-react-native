// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import authStorage from '../auth/storage';
import cache from '../utility/cache';
// define the api
const apiClient = create({
  baseURL: 'http://192.168.0.101:9000/api',
//   headers: { Accept: 'application/vnd.github.v3+json' },
})

apiClient.addAsyncRequestTransform(async (request)=>{
 const authToken = await authStorage.getToken();
 if (!authToken) {
  return;
 }
 request.headers['x-auth-token'] = authToken;

})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig)=>{
  const response = await get(url, params, axiosConfig);;
  if (response.ok) {
    cache.storeData(url, response.data);
    return response;
  }
  const data = await cache.getData(url);
  return data ? {ok: true, data} : response;
}

export default apiClient;

