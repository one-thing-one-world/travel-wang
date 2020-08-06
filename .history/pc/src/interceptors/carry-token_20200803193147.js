import {
  cache
} from '@/services/cache'

export class CarryToken {

  async onRequest(config) {
    let token = await cache.getItem('user')

    console.log(token);

    return {
      ...config,
      Authentication: token.token
    }
  }
}