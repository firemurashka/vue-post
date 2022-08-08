/* store - indeex.js - подключение глобального хранилища */
import {
    createStore
} from "vuex";
import {
    postModule
} from "./postModule";
export default createStore({

    /* данные */
    state: {},

    /* компьютед св-ва, кэшируемые - вычисляемые значения */
    getters: {

    },

    /* функции внутри которой мы меняем значение поля состояния */
    mutations: {

    },

    /* внутри сея испл мутации */
    actions: {

    },
    modules: {
        post: postModule
    }


})