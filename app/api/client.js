// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://192.168.0.101:9000/api',
//   headers: { Accept: 'application/vnd.github.v3+json' },
})

export default api;

// start making calls
api
  .get('/listings')
  .then(response =>{
    if (!response.ok) {
        return response.problem;
    }
  })
  .then(console.log)

// customizing headers per-request
api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } })