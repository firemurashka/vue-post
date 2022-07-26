export default {
    mounted(el, binding) {
        /* код отвечает за отслеживание - пересечение какого-то элемента */
        const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            //передаем не явную функцию а кот мы передали в объект binding в поле value - и сразу ее вызываем ()
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                binding.value()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        //наблюдаем за текущим элементом
        observer.observe(el);
    },
    name: 'intersection'
}