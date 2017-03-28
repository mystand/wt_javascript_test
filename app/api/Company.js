//@flow
import { routes } from '~/app/config'
import { apiGet, apiPost } from '~/app/api/__helpers'

export function getCompanies(page: number) {
  return apiGet(`${routes.companies.index}?page=${page}`)
}

export function createCompany(company: Object) {
  return apiPost(routes.companies.create, company)
}

export function generateCompanies(count: number) {
  return apiPost(routes.companies.generate, { count })
}
