<!-- PostPage.vue - страница с постами -->


<template>
	<div>
		<h1>{{ $store.getters.doubleLikes }}</h1>
		<my-button @click="$store.commit('incrementLikes')"> likes </my-button>
		<my-button @click="$store.commit('decrementLikes')"> dislikes </my-button>

		<h1>Страница с постами</h1>
		<my-input v-focus v-model="searchQuery" placeholder="Поиск...." />
		<div class="app__buttons">
			<my-button class="button__showdialog" @click="showDialog"> Создать пост </my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>

		<my-button class="button__showdialog" @click="fetchPosts"> Получить посты </my-button>
		<my-dialog v-model:show="dialogVisible">
			<!-- компонент -PostForm-->
			<!-- @create="createPost"  - подписка и отработка события create -->
			<post-form @create="createPost" />
		</my-dialog>
		<!-- компонент -PostList-->
		<!-- :posts= - привязываем посты к нашему компоненту, в данном случае они улетят как пропсы  -->
		<!-- "posts" -  и указываем какое зачение мы привязываем в данном случае посты в поле data -->
		<!-- sortedPosts в компонент поступает отсортированный список -->
		<post-list @remove="removePost" :posts="sortedAndSearchPosts" v-if="!isPostsLoading" />
		<div v-else>Идет загрузка...</div>
		<div v-intersection="loadMorePosts" class="observer"></div>

		<!-- номера страниц -->
		<!-- <div class="page__wrapper">
			<div class="page" @click="changePage(pageNumber)" v-for="pageNumber in totalPages" :key="pageNumber" :class="{
				'current-page': page === pageNumber
			}">
				{{ pageNumber }}
			</div>
		</div> -->
	</div>
</template>

<script>
/* импортирование компонентов */
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
/* импорт библиотеки для хапросов с сервера axios*/
import axios from 'axios';

export default {
	/* регистрация компонентов в поле components */
	components: {
		PostForm, PostList
	},
	data() {
		return {
			//массив постов
			posts: [
			],
			//еще 2 модели
			//title: '',
			//body: ''
			dialogVisible: false,
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
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По описанию' },

			]
		}
	},
	methods: {
		/* функция обработки кнопки */
		createPost(post) {
			//добавляем post в массив posts те мы его от ребенка получили и в массив опракинули
			this.posts.push(post);
			this.dialogVisible = false;
		},
		//прослушиваем событие remove  с параметром post кот мы опракидывали в emit в postlist
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		/* функция по забору значения из input
		по-умолчанию параметром эти обработчики получают event
		inputTitle(event) {
		this.title = event.target.value;
		вместо этой функции пишем сразу в обработчике input:
		 @input="title=$event.target.value"
		} */
		showDialog() {
			this.dialogVisible = true;
		},

		/* смена страницы и подгружение страниц 
		changePage(pageNumber) {
			this.page = pageNumber
			this.fetchPosts()
		},
		*/
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
				//setTimeout - задержка показа постов 
				setTimeout(async () => {
					//делаем запрос на сервер и ответ помешаем в переменную response
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit
						}
					});
					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
					this.posts = response.data;
					this.isPostsLoading = false;
				}, 1000);

			} catch (e) {
				//если произошла ошибка будем выводить в alert
				alert('Ошибка')
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1;
				//setTimeout - задержка показа постов 
				setTimeout(async () => {
					//делаем запрос на сервер и ответ помешаем в переменную response
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit
						}
					});
					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
					this.posts = [...this.posts, ...response.data];
					this.isPostsLoading = false;
				}, 1000);

			} catch (e) {
				//если произошла ошибка будем выводить в alert
				alert('Ошибка')
			}
		}
	},
	//хук mounted в нем реализуем динамическую подгрузку постов
	mounted() {
		this.fetchPosts();
		console.log(this.$refs.observer);

	},
	//сортировка постов с помощью computed
	computed: {
		sortedPosts() {
			return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
		},
		sortedAndSearchPosts() {
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		},
	},
	/* сортировка watch
	watch: {
		selectedSort(newValue) {
			this.posts.sort((post1, post2) => {
				return post1[newValue]?.localeCompare(post2[newValue])
			})
		},
	} */
}

</script>

<style>
.app__buttons {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;
}

.page__wrapper {
	display: flex;
	margin-top: 15px;
}

.page {
	border: 1px solid #000;
	padding: 10px;
}

.current-page {
	border: 2px solid teal;
}

.observer {
	height: 30px;
	background-color: green;

}
</style>
