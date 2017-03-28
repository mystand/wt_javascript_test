//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { syncHistoryWithStore } from 'react-router-redux'

import Companies from '~/app/containers/pages/companies/Companies'
import CompaniesNew from '~/app/containers/pages/companies-new/CompaniesNew'
import Layout from '~/app/containers/pages/layout/Layout'
import store from '~/app/Store'
import './assets/styles/global.css'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <MuiThemeProvider>
      <div style={{height: '100%'}}>
        <Router history={history}>
          <Redirect from='/' to='/companies' />
          <Route path='/' component={Layout}>
            <Router path='companies' component={Companies} />
            <Router path='companies/new' component={CompaniesNew} />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))
