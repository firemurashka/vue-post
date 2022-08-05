/*directives - Vfocus.js  директива Vfocus*/

export default {
    mounted(el) {
        //вызываем у элемента функцию фокус
        el.focus()
    },
    name: 'focus'
}