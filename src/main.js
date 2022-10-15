import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import {
    Container, Aside, Header, Main, Menu, Submenu,
    MenuItemGroup, MenuItem, Breadcrumb, BreadcrumbItem,
    Button, Dropdown, DropdownItem, DropdownMenu
} from 'element-ui'

Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
