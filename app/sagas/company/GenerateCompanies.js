//@flow
import { takeEvery, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

import * as api from '~/app/api'
import { SAGA_GENERATE_COMPANIES, SAGA_GET_COMPANIES } from '~/app/reducers/Company'

function* perform(action) {
  const { count } = action.payload

  try {
    yield api.generateCompanies(count)
    yield put(createAction(SAGA_GET_COMPANIES)({page: 1}))
  } catch (err) { console.log(err) }
}

function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_GENERATE_COMPANIES, perform)
}

export default watch
