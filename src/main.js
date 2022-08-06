/* main.js - основной файл проекта, который загружает VUE*/

/* createApp импортируем из VUE*/
import {
    createApp
} from 'vue'
/* указываем путь к компоненту */
import App from './App.vue'
//ипортируем сюда массив UI компонентов
import components from '@/components/UI';

import router from "@/router/router";
/* импорт директивы отслеживания */
import directives from '@/directives';
import store from "@/store";

/* createApp - функция  */
const app = createApp(App)
    //глобальная регистрация UI компонентов
    /* components - массив компонентов */
    /* app - обращаемся к app */
    /* component - вызываем функцию */
    /* component.name -параметр - название компонента */
    /* component -компонент */
components.forEach(component => {
        app.component(component.name, component)
    })
    /* регистрация директивы */
directives.forEach(directive => {
        app.directive(directive.name, directive)
    })
    /* mount - монтирование приложения  */
app
    .use(router)
    .use(store)
    .mount('#app');