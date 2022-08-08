<!-- PostPage.vue - страница с постами -->


<template>
	<div>
		<h1>{{ $store.state.post.limit }}</h1>

		<!-- <h1>Страница с постами</h1>
		<my-input v-focus v-model="searchQuery" placeholder="Поиск...." />
		<div class="app__buttons">
			<my-button class="button__showdialog" @click="showDialog"> Создать пост </my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>
		<my-button class="button__showdialog" @click="fetchPosts"> Получить посты </my-button>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list @remove="removePost" :posts="sortedAndSearchPosts" v-if="!isPostsLoading" />
		<div v-else>Идет загрузка...</div>
		<div v-intersection="loadMorePosts" class="observer"></div>
 -->
	</div>
</template>

<script>
/* импортирование компонентов */
//import PostList from "@/components/PostList";
//import PostForm from "@/components/PostForm";
/* импорт библиотеки для хапросов с сервера axios*/
//import axios from 'axios';

export default {
	/* регистрация компонентов в поле components */
	components: {

	},
	data() {
		return {

			dialogVisible: false,

		}
	},
	methods: {

	},
	//хук mounted в нем реализуем динамическую подгрузку постов
	mounted() {

	},
	//сортировка постов с помощью computed
	computed: {

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
