import {getToken} from "@/plugins/cookie";
import config from "@/config"

export default async function ({ next, to,from }) {
  if ( !getToken() ) {
    next({ name: config.routes.login })
    return false
  }
  return true
}
