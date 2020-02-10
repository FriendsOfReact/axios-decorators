// @flow

import Axios, { Method } from 'axios'
import { ClientConfigurator } from '../util/ClientConfigurator'
import type { MethodOptions, Request } from '../type'
import { replaceParams, ClientLogger } from '../util'

export const requestGenerator = (serviceName, serviceBaseURL, serviceBasePath, method: Method, apiEndpoint, methodOptions: MethodOptions, requestArgs: Request) => {
  ClientLogger.print('--- --- ---')
  const baseURL = (serviceBaseURL) ? serviceBaseURL : ClientConfigurator.getBaseURL(serviceName)
  let headers = (methodOptions && methodOptions.headers) ? methodOptions.headers : ClientConfigurator.getHeaders(serviceName)
  if (headers && typeof (headers) === 'function') {
    ClientLogger.print('Header variable is a function.')
    headers = headers()
  }

  let endpoint = apiEndpoint
  if (serviceBasePath) {
    endpoint = `${serviceBasePath}${endpoint}`
  }

  let url = `${endpoint}`
  if (baseURL) {
    url = `${baseURL}${endpoint}`
  }

  let data = {}
  let params = {}

  ClientLogger.print('Method\n', method)
  ClientLogger.print('BaseURL\n', baseURL)
  ClientLogger.print('Endpoint\n', endpoint)
  ClientLogger.print('URL\n', url)

  if (requestArgs) {
    if (requestArgs.path) {
      const findArray = Object.keys(requestArgs.path).map(item => `:${item}`)
      const replaceArray = Object.values(requestArgs.path)
      url = replaceParams(url, findArray, replaceArray)
      ClientLogger.print('Path variables\n', requestArgs.path)
    }
    if (requestArgs.data) {
      data = requestArgs.data
      ClientLogger.print('Data\n', data)
    }
    if (requestArgs.params) {
      params = requestArgs.params
      ClientLogger.print('Params\n', params)
    }
  }

  return Axios({
    method: method,
    url: url,
    data: data,
    params: params,
    headers: headers
  })
}
