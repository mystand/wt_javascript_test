//@flow
import React, { PropTypes as pt } from 'react'
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'
import { Link } from 'react-router'

import { Container, Header, ActionPanel } from './CompaniesNewStyle'

const CompaniesNew = React.createClass({
  propTypes: {
    handleSubmit: pt.func.isRequired
  },

  render() {
    const { handleSubmit } = this.props

    return <form onSubmit={handleSubmit}>
      <Container>
        <Header> Add Company </Header>
        <Field name='name' component={TextField} hintText='Company Name' />
        <ActionPanel>
          <span><RaisedButton label='Add' onClick={handleSubmit} /></span>
          <Link to='/companies' style={{marginLeft: '10px'}}>
            <RaisedButton label='Cancel' />
          </Link>
        </ActionPanel>
      </Container>
    </form>
  }
})

export default reduxForm({
  form: 'companies-new'
})(CompaniesNew)
