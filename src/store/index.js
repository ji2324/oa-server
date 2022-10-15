import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state: {
        isCollapse: false,
        headerList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                i: "1",
            },
        ]
    },
    mutations: {
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        addheaderList(state, item) {
            // console.log(state.headerList[0].path)
            // console.log(item)
            let index = state.headerList.findIndex(m => m.path == item.path)
            // console.log(index)
            if (index < 0) {
                state.headerList.push(item)
                // console.log(state.headerList)
            }
        }
    },
    getters: {

    },
    actions: {

    }
})
export default store