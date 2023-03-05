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
        },
        showSideMenu(state, x){
            state.viewData.sideMenu = x;
        }
    },
    getters: {}
});

export default store;