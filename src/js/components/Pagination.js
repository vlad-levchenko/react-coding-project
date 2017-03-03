import React from 'react';

import FlatButton from 'material-ui/FlatButton';

export default class Header extends React.Component {

  render() {
    const { photos, currentPage, onNavigateToPage, pageSize } = this.props;
    const totalPages = photos.length / pageSize;
    
    return (
      <div>
        {
          this.getPagination(totalPages, currentPage, onNavigateToPage)
        }
      </div>
    );
  }

  getPagination(totalPages, currentPage, onNavigateToPage) {
    let mappedElements = [];

    for (let i = 0; i < totalPages; i++) {
      let pageToNavigate = i + 1;

      if (pageToNavigate === currentPage) {
        mappedElements.push(<FlatButton key={i} label={pageToNavigate} primary={true} onClick={onNavigateToPage.bind(this, pageToNavigate)} />);
      } else {
        mappedElements.push(<FlatButton key={i} label={pageToNavigate} onClick={onNavigateToPage.bind(this, pageToNavigate)} />);
      }
    }

    return mappedElements;
  }
}
