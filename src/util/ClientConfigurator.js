// @flow
export class ClientConfigurator {
  static baseURL
  static headers = {}

  static setBaseURL (baseURL: string | (serviceName: string) => void) {
    this.baseURL = baseURL
  }

  static setHeaders (headers: string | (serviceName: string) => void) {
    this.headers = headers
  }

  static getBaseURL (serviceName: string): string {
    if (typeof(this.baseURL) === 'function') {
      return this.baseURL(serviceName)
    }
    return this.baseURL
  }

  static getHeaders (serviceName: string): string {
    if (typeof(this.headers) === 'function') {
      return this.headers(serviceName)
    }
    return this.headers
  }
}
