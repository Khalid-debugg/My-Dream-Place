import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import dataPersistence from "./plugins/dataPersistencePlugin";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import "./input.css";

const pinia = createPinia();
pinia.use(dataPersistence);
const app = createApp(App);

app.use(pinia);
app.use(VueAwesomePaginate);
app.use(router);

app.mount("#app");
