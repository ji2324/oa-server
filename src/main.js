import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import { Container, Aside, Header, Main, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'

Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);


new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
