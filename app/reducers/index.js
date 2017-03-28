// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import company from '~/app/reducers/Company'

const RootReducer = combineReducers({
  company,
  form: formReducer,
  routing: routerReducer
})

export default RootReducer
