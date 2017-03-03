import React from 'react'
import { Link } from 'react-router';

import { List, ListItem } from 'material-ui/List';

import { connect } from 'react-redux'
import { fetchAlbumByUserId } from '../actions/albumsActions'

@connect((store) => {
  return {
    albums: store.albums.albums,
  };
})
  
export default class Albums extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchAlbumByUserId(this.props.params.userId))
  }

  render() {
    const { albums } = this.props;

    const mappedElements = albums.map(album => {
      return (
        <ListItem key={album.id}>
          <Link to={`/user/albums/album/${album.id}`}>{album.title}</Link>
        </ListItem>
      )
    });

    return (
      <List>
        {mappedElements}
      </List>
    );
  }
}
