import React from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <RaisedButton label='Navigate Back' primary={true} style={{ margin: '12' }} onClick={browserHistory.goBack} />
      </div>
    );
  }
}
