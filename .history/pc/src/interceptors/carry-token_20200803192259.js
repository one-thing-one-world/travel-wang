import {
  cache
} from '@/services/cache'

export class CarryToken {
  // 
  onRequest(config) {
    // TODO get token here
    let token = cache.getItem('user')

    // console.info("running")

    return {
      ...config,
      Authentication: token // TODO 
    }
  }
}