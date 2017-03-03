import React from 'react';
import { Link } from 'react-router';

import { List, ListItem } from 'material-ui/List';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

@connect((store) => {
  return {
    users: store.users.users
  };
})
  
export default class Albums extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props;

    const mappedElements = users.map(user => {
      return (
        <ListItem key={user.id}>
          <Link to={`/user/albums/${user.id}`}>{user.username}</Link>
        </ListItem>
      );
    });

    return (
      <List>
        {mappedElements}
      </List>
    );
  }
}
