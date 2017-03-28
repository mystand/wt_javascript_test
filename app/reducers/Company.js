// @flow
import type Action from '~/app/Types'

export const SET_COMPANIES = 'company/SET_COMPANIES'
export const SAGA_GET_COMPANIES = 'company/SAGA_GET_COMPANIES'
export const SAGA_CREATE_COMPANY = 'company/SAGA_CREATE_COMPANY'
export const SAGA_GENERATE_COMPANIES = 'company/SAGA_GENERATE_COMPANIES'

const initialState = {
  companies: [],
  pagination: {
    current: 1,
    total: 1
  }
}

export default function reducer(state: Object = initialState, action: Action) {
  switch (action.type) {
    case SET_COMPANIES: {
      const { collection, pagination } = action.payload
      return {
        ...state,
        pagination,
        companies: collection
      }
    }

    default:
      return state
  }
}
