/**
 * resumify application entrypoint
 */

// Vue is (should be) available in the Global context
import Vue from "vue"
import VueRouter from "vue-router"

// root application component
import App from "@/App.vue"
import routes from "@/routes"

let router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
});

// available in global context to play with ;P
window.app = new Vue({
  router,
  el: "#application-mount",
  render: h => h(App)
});
