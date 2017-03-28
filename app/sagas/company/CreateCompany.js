//@flow
import { takeEvery, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import * as api from '~/app/api'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'

function* perform(action) {
  const { company, redirectTo } = action.payload

  try {
    yield api.createCompany(company)
    if (redirectTo != null) {
      yield put(push(redirectTo))
    }
  } catch (err) { console.log(err) }
}

function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_CREATE_COMPANY, perform)
}

export default watch
