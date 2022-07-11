import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "@/plugins/routes";
import config from "@/config";
import store from "@/store/index"
import { getToken } from "@/plugins/cookie";

Vue.use(VueRouter);

const routes = [...Routes]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const payload = { to, from, next };
    let preventNext = false;
    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);
      if (!result) {
        preventNext = true;
        break;
      }
    }
    if (preventNext) {
      return;
    }
  }
  if(to.name === config.routes.login || to.name === config.routes.register){
    if(getToken()){
      next({name: config.routes.dashboard})
    }
  }
  next();
});

export default router;
