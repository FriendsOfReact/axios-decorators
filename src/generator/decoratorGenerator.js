// @flow

import { Method } from 'axios'
import type { MethodOptions } from '../type'
import { requestGenerator } from './requestGenerator'

export const decoratorGenerator = (method: Method) => (
  endpoint: string,
  options: MethodOptions
) => {
  return function (target, key, descriptor) {
    descriptor.value = async function () {
      const serviceName = target.serviceName
      const serviceBaseURL = target.serviceBaseURL
      const serviceBasePath = target.serviceBasePath

      return requestGenerator(serviceName, serviceBaseURL, serviceBasePath, method, endpoint, options, arguments[0])
    }
  }
}
