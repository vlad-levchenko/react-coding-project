import React from 'react'
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';


import { connect } from 'react-redux'
import { fetchPhotosByAlbumId } from '../actions/photosActions'

import Photo from './Photo';
import Pagination from './Pagination';

const styles = {
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const pageSize = 10;

@connect((store) => {
  return {
    photos: store.photos.photos,
  };
})
  


export default class Photos extends React.Component {

  constructor() {
    super();

    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchPhotosByAlbumId(this.props.params.albumId))
  }

  onPhotoPreviewOpen(photo) {
    this.setState({photo});
  }

  onPhotoPreviewClosed() {
    this.setState({photo: null});
  }

  onNavigateToPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { photos } = this.props;
    const { photo, currentPage } = this.state;

    const photosPage = photos.filter((val, index) => {
      return index > ((currentPage - 1) * pageSize) && index < (currentPage * pageSize);
    });

    const mappedElements = photosPage.map(photo => {
      return (
        <GridTile
          key={photo.id}
          title={photo.title}
          actionIcon={<RaisedButton label='Preview' primary={true} style={{margin: '12'}} onClick={this.onPhotoPreviewOpen.bind(this, photo)} />}>
          <img src={photo.thumbnailUrl} />
        </GridTile>
      );
    });

    return (
      <div>
        {!photo && <Pagination photos={photos} currentPage={currentPage} pageSize={pageSize} onNavigateToPage={this.onNavigateToPage.bind(this)} />}
        {!photo &&
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
          {mappedElements}
        </GridList>
        }
        
        {photo && <Photo photo={photo} onPhotoPreviewClosed={this.onPhotoPreviewClosed.bind(this)} />}
      </div>
    );
  }
}
