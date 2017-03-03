import axios from 'axios';

export function fetchAlbumByUserId(userId) {
  return function(dispatch) {
    axios.get(`http://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_ALBUMS_FULFILLED', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ALBUMS_REJECTED', payload: error });
      })
  }
}