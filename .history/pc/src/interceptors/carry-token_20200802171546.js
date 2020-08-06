export class CarryToken {
  // 
  onRequest(config){
    // TODO get token here

    console.info("running")

    return {
      ...config,
      Authentication: "token" // TODO 
    }
  }
}