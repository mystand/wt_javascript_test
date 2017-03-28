//@flow
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'
import { SubmissionError } from 'redux-form'

import CompaniesNew from '~/app/components/pages/companies-new/CompaniesNew'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'

export const mapStateToProps = (): Object => ({
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (values) => {
    if (values.name == null || values.name.length < 3) {
      throw new SubmissionError({ name: 'Should have at least 3 symbols' })
    }

    dispatch(createAction(SAGA_CREATE_COMPANY)({company: values, redirectTo: '/companies'}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesNew)
