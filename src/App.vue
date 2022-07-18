<template>
	<!--главный компонент -App-->
	<div class="app">
		<h1>Страница с постами</h1>
		<my-button class="button__showdialog" @click="showDialog"> Создать пост </my-button>
		<my-dialog v-model:show="dialogVisible">
			<!-- компонент -PostForm-->
			<!-- @create="createPost"  - подписка и отработка события create -->
			<post-form @create="createPost" />
		</my-dialog>

		<!-- компонент -PostList-->
		<!-- :posts= - привязываем посты к нашему компоненту, в данном случае они улетят как пропсы  -->
		<!-- "posts" -  и указываем какое зачение мы привязываем в данном случае посты в поле data -->
		<post-list @remove="removePost" :posts="posts" />

	</div>
</template>

<script>
/* импортирование компонентов */
import PostList from "@/components/PostList"
import PostForm from "@/components/PostForm"

export default {
	/* регистрация компонентов в поле components */
	components: {
		PostForm, PostList
	},
	data() {
		return {
			//массив постов
			posts: [
				{ id: 1, title: 'JavaScript 1', body: 'Описание поста 1' },
				{ id: 2, title: 'JavaScript 2', body: 'Описание поста 2' },
				{ id: 3, title: 'JavaScript 3', body: 'Описание поста 3' },
			],
			//еще 2 модели
			//title: '',
			//body: ''
			dialogVisible: false,
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
		}
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

.button__showdialog {
	margin: 15px 0;
}
</style>
