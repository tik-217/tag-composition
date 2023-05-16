import { createApp } from "vue";
import App from "./components/App.vue";
import "./assets/styles/main.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
