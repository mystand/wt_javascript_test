//@flow
import watchGetCompanies from '~/app/sagas/company/GetCompanies'
import watchCreateCompany from '~/app/sagas/company/CreateCompany'
import watchGenerateCompanies from '~/app/sagas/company/GenerateCompanies'

const sagas = [
  watchGetCompanies(),
  watchCreateCompany(),
  watchGenerateCompanies()
]

export default sagas
