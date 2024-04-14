// Icon
import "@mdi/font/css/materialdesignicons.css";

// Router
import { createRouter, createMemoryHistory } from "vue-router";

import myHome from "@/pages/myHome.vue";

import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import A_propos from "./pages/a_propos.vue";
import Who_we_are from "./pages/who_we_are.vue";
import contact from "./pages/contact.vue";
import connecter from "./pages/connecter.vue";

 const app = createApp(App);

const routes = [
  { path: "/", name: "myHome", component: myHome },
  { path: "/about", name: "a_propos", component: A_propos },
  { path: "/who_we_are", name: "who_we_are", component: Who_we_are },
  { path: "/contact", name: "contact", component: contact },
  { path: "/connecter", name: "connecter", component: connecter },
];

const vuetify = createVuetify({
  components,
  directives,
});

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);

app.use(vuetify);
app.mount("#app");
