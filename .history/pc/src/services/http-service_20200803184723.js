import { HTTPRequestFactory } from "@wizardoc/http-request";
import ServerConfig from "../configs/server.config.json";
import { Message } from 'element-ui';
import { Notification } from 'element-ui';
import { CarryToken } from "../interceptors/carry-token";
import { TransferRequestData } from "../interceptors/transfer-request-data";

// HTTPFactory is a factory that can create HTTPService
// and provide some interface which can collect configure information
// u can provide information of server or interceptors etc. to HTTPFactory, then
// HTTPFactory knows what information to inject into to HTTPService
export class HTTPFactory extends HTTPRequestFactory /** implements HTTPConfigure  */ {
  configure({ serverConfigure, interceptor }) {


    interceptor.use([CarryToken, TransferRequestData])
    serverConfigure.setConfig(ServerConfig);
    serverConfigure.setDevPrefix("api");
  }

  /**
   *  u can handing all error that during runtime here.
   * @param {string} errMsg the error message from expect return value
   * @param {error} err the instance of error
   */
  //errMsg 局部的 
  //err 请求发生错误的一个对象
  errorInteract(errMsg, err) {
    console.log(this.errorInteract);
    const { response } = err;
    if (response && response.data.err) {
      // alert(response.data.err)

      Message(response.data.err.msg)

    } else {
      alert(errMsg)
    }

    // console.log(err);

    // const {response} = err;



    // if (response && response.data.err){
    //   alert()
    // }

    // console.log(err.response);
    // if(err.response.data.err){
    //   alert("dd")
    // }




  }
}

const httpFactory = new HTTPFactory();

export const httpService = httpFactory.create();
