import { Group } from "@wizardoc/http-utils";

@Group("/admin/user")
export class UserAPI {
  login = "/login";
  register="/register"
}
