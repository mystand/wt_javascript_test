//@flow
import { put, takeEvery } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

import * as api from '~/app/api'
import { SAGA_GET_COMPANIES, SET_COMPANIES } from '~/app/reducers/Company'

function* perform(action) {
  const { page } = action.payload

  try {
    const result = yield api.getCompanies(page)
    yield put(createAction(SET_COMPANIES)(result))
  } catch (err) { console.log(err) }
}

function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_GET_COMPANIES, perform)
}

export default watch
