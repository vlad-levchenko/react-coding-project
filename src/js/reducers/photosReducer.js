export default function reducer(state={
    photos: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case 'FETCH_PHOTOS': {
        return {...state, fetching: true}
      }
      case 'FETCH_PHOTOS_REJECTED': {
        return {...state, fetching: false, error: action.payload}
      }
      case 'FETCH_PHOTOS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          photos: action.payload,
        }
      }
    }

    return state
}
