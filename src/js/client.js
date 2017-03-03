import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './components/Layout'
import Users from './components/Users'
import Albums from './components/Albums'
import Photos from './components/Photos'
import store from './store'

const app = document.getElementById('app')

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>

        <Route path='/' component={Layout}>
          
          <Route path='users' component={Users} />
          <Route path='user/albums/:userId' component={Albums} />
          <Route path='user/albums/album/:albumId' component={Photos} />
          <IndexRoute component={Users} />

        </Route>

      </Router>  
    </Provider>
  </MuiThemeProvider>
, app);
