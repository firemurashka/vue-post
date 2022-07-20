<template>
	<!--главный компонент -App-->
	<div class="app">
		<h1>Страница с постами</h1>
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
		<post-list @remove="removePost" :posts="posts" v-if="!isPostsLoading" />
		<div v-else>Идет загрузка...</div>
	</div>
</template>

<script>
/* импортирование компонентов */
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
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
			selectedSort: '',
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
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
				//setTimeout - задержка показа постов 
				setTimeout(async () => {
					//делаем запрос на сервер и ответ помешаем в переменную response
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
					this.posts = response.data;
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
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}


.app__buttons {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;

}
</style>
