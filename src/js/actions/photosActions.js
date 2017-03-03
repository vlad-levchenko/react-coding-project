import axios from 'axios';

export function fetchPhotosByAlbumId(albumId) {
  return function(dispatch) {
    axios.get(`http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        dispatch({type: 'FETCH_PHOTOS_FULFILLED', payload: response.data})
      })
      .catch((error) => {
        dispatch({type: 'FETCH_PHOTOS_REJECTED', payload: error})
      })
  }
}
