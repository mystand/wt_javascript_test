export const api = {
  url: process.env.NODE_ENV === 'development' ? 'http://192.168.0.122:3000' : 'not intended for production use'
}

export const routes = {
  companies: {
    index: '/companies',
    create: '/companies',
    generate: '/companies/generate'
  }
}

const config = { api, routes }
export default config
