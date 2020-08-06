import {
  cache
} from '@/services/cache'

export class CarryToken {
  // 
  async onRequest(config) {
    // TODO get token here
    let token = await cache.getItem('user')
    console.log(token);
    // console.info("running")

    return {
      ...config,
      Authentication: token // TODO 
    }
  }
}