import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
