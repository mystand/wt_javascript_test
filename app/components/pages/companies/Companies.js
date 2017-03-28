//@flow
import React, { PropTypes as pt } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardTitle } from 'material-ui/Card'
import Pagination from 'material-ui-pagination'

import { Container, Header } from './CompaniesStyle'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired,
    generateCompanies: pt.func.isRequired,
    pagination: pt.shape({
      total: pt.number.isRequired,
      current: pt.number.isRequired
    }).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  setPage(page: number) {
    this.props.getCompanies(page)
  },

  generateCompanies() {
    this.props.generateCompanies(() => {
      this.props.getCompanies()
    })
  },

  render() {
    const { companies, pagination } = this.props

    return <Container>
      <Header>Companies</Header>
      {companies.map(c =>
        <Card key={c.id} style={{marginBottom: '20px'}}>
          <CardTitle title={c.name} />
        </Card>
      )}
      <Pagination {...pagination} display={10} onChange={this.setPage} />
      <br />
      <div>
        <Link to='/companies/new'>
          <RaisedButton label='Add Company' primary />
        </Link>
        <RaisedButton label='Generate 100' style={{marginLeft: '10px'}} onClick={this.generateCompanies} />
      </div>
    </Container>
  }
})

export default Companies
