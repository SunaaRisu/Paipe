import { createStore } from "vuex";

const store = createStore({
    state () {
        return{
            viewData: {
                sideMenu: true
            }
            
        }
    },
    mutations: {
        toggleSideMenu(state) {
            state.viewData.sideMenu = !state.viewData.sideMenu;
        }
    },
    getters: {}
});

export default store;