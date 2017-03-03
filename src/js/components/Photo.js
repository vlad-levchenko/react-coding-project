import React from 'react'

import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Photo extends React.Component {

  render() {
    const { photo, onPhotoPreviewClosed } = this.props;

    return (<Card style={{width: '600px', height: '600px'}}>
      <CardMedia overlay={<CardTitle title={photo.title} />} >
        <img src={photo.url} />
      </CardMedia>
      <CardActions>
        <FlatButton label='Close' onClick={onPhotoPreviewClosed} />
      </CardActions>
    </Card>
    );
  }
}
