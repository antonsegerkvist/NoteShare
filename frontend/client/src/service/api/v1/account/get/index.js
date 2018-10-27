import axios from 'axios'

export function ServiceApiV1AccountGet () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/service/api/v1/account',
      validateStatus (status) {
        const validStatusCodes = [200]
        return validStatusCodes.indexOf(status) !== -1
      }
    })
      .then(response => {
        response.data._status = response.status
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}