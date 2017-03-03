import React from 'react'

import Header from './Header';

export default class Layout extends React.Component {
  render() {
    let title = 'Page title goes here';

    return <div>
      <Header title={title} />
      {this.props.children}
    </div>
  }
}