/* store - indeex.js - подключение глобального хранилища */
import {
    createStore
} from "vuex";
export default createStore({

    /* данные */
    state: {
        likes: 2

    },

    /* компьютед св-ва, кэшируемые - вычисляемые значения */
    getters: {
        /* функция увеличения лайков */
        doubleLikes(state) {
            return state.likes * 2
        }
    },

    /* функции внутри которой мы меняем значение поля состояния */
    mutations: {
        incrementLikes(state) {
            state.likes += 1
        },
        decrementLikes(state) {
            state.likes -= 1
        }
    },

    /* внутри сея испл мутации */
    actions: {

    },
    modules: {

    }


})