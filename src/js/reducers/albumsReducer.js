export default function reducer(state = {
  albums: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_ALBUMS': {
      return { ...state, fetching: true };
    }
    case 'FETCH_ALBUMS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_ALBUMS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        albums: action.payload,
      };
    }
  }

  return state
}
