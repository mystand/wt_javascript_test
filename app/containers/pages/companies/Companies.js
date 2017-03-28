//@flow
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'

import Companies from '~/app/components/pages/companies/Companies'
import { SAGA_GET_COMPANIES, SAGA_GENERATE_COMPANIES } from '~/app/reducers/Company'

export const mapStateToProps = (state: Object): Object => ({
  companies: state.company.companies,
  pagination: state.company.pagination
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  getCompanies: (page: number = 1) => dispatch(createAction(SAGA_GET_COMPANIES)({page})),
  generateCompanies: () => dispatch(createAction(SAGA_GENERATE_COMPANIES)({count: 100})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Companies)
