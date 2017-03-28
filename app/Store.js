// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import reducer from '~/app/reducers'
import sagas from '~/app/sagas'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = createRouterMiddleware(browserHistory)
const logger = createLogger({
  collapsed: true,
  actionTransformer: (action) => ({type: action.type, ...action.payload})
})

const enhancer = compose(applyMiddleware(sagaMiddleware, logger, routerMiddleware))
const store = createStore(reducer, undefined, enhancer)
sagaMiddleware.run(sagas, store.dispatch)

export default store
