import {
  ContentType,
} from '@wizardoc/http-request';
import QS from 'qs'

export class TransferRequestData {
  onRequest(config) {
    const contentType = config.headers['Content-Type']

    return {
      ...config,
      withCredentials: true,
      data: contentType === ContentType.Form && Object.prototype.toString.call(config.data) === "[object Object]" && QS.stringify(config.data)
    }
  }
}