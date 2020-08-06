import { cache } from "@/services/cache";

export class CarryToken {
  async onRequest(config) {
    let token = await cache.getItem("user", { token: "" });

    return {
      ...config,
      headers: {
        ...config.headers,
        Authentication: token.token,
      },
    };
  }
}
