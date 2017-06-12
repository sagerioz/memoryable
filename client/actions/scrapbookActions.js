import axios from 'axios';

export function createScrapbook(event) {
  return dispatch => {
    return axios.post('/api/scrapbook', event);
  };
}
export function displayScrapbook(event) {
  return dispatch => {
    return axios.get('/api/scrapbook', event);
  }
}
