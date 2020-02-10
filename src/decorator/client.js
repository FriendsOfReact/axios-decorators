// @flow

export const client = (options: string | { name: string; baseURL: string; basePath: string; }) => {
  return function (target) {
    if (typeof(options) === 'object') {
      target.serviceName = (options && options.name) || target.name
      if (options) {
        if (options.baseURL) {
          target.serviceBaseURL = options.baseURL
        }
        if (options.basePath) {
          target.serviceBasePath = options.basePath
        }
      }
    } else {
      target.serviceName = options || target.name
    }

    return target
  }
}
