import { combineReducers } from 'redux';

import albums from './albumsReducer';
import photos from './photosReducer';
import users from './usersReducer';

export default combineReducers({
  albums,
  photos,
  users,
});
