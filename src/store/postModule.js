/* store - postModule.js*/
import axios from "axios";

export const postModule = {

    /* данные */
    state: () => ({
        //массив постов
        posts: [],
        //еще 2 модели
        //title: '',
        //body: ''
        isPostsLoading: false,
        /* модель для сортировки по постам */
        selectedSort: '',
        /* модель для поиска по названию поста */
        searchQuery: '',
        /* модель - номер страницы */
        page: 1,
        /* модель - число постов на странице */
        limit: 10,
        /* модель - число страниц */
        totalPages: 0,
        sortOptions: [{
                value: 'title',
                name: 'По названию'
            },
            {
                value: 'body',
                name: 'По описанию'
            },

        ]
    }),

    /* компьютед св-ва, кэшируемые - вычисляемые значения */
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort] ?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },

    /* функции внутри которой мы меняем значение поля состояния */
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },

    /* внутри сея испл мутации */
    actions: {
        async fetchPosts({
            state,
            commit
        }) {
            try {
                //вместо this.isPostsLoading = true; - commit('setLoading', true)
                commit('setLoading', true);
                //setTimeout - задержка показа постов - setTimeout(async() => {}, 1000)
                //делаем запрос на сервер и ответ помешаем в переменную response
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)

                //  this.isPostsLoading = false;
            } catch (e) {
                //если произошла ошибка будем выводить в alert

                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({
            state,
            commit
        }) {
            try {
                commit('setPage', state.page + 1)
                    //setTimeout - задержка показа постов 
                setTimeout(async() => {
                    //делаем запрос на сервер и ответ помешаем в переменную response
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    });
                    commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                    commit('setPosts', [...state.posts, ...response.data]);
                }, 1000);

            } catch (e) {
                //если произошла ошибка будем выводить в alert
                console.log(e);
            }
        }
    },
    modules: {

    },
    namespaced: true


}