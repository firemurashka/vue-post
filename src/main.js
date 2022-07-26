import {
    createApp
} from 'vue'
import App from './App.vue'
//ипортируем сюда массив UI компонентов
import components from '@/components/UI';
import router from "@/router/router";
/* импорт директивы отслеживания */
import directives from '@/directives';


const app = createApp(App)
    //глобальная регистрация UI компонентов
components.forEach(component => {
        app.component(component.name, component)
    })
    /* регистрация директивы */
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .mount('#app');