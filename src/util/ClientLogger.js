// @flow
export class ClientLogger {
  static status = false

  static print () {
    if (this.status) {
      console.log(...arguments)
    }
  }

  static table () {
    if (this.status) {
      console.table(...arguments)
    }
  }

  static setStatus (status: boolean) {
    this.status = status
  }
}
