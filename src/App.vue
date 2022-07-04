<template>
	<div class="app">
		<!-- @submit.prevent отмена стандартного поведения браузера - перезагрузки (prevent-модификатор)-->
		<form @submit.prevent>
			<h4>Создание поста</h4>
			<!-- v-bind или просто : - директива для привязки данных -->
			<!--  @input обработчик события input который вызывает функцию inputTitle -->
			<input :value="title" @input="title = $event.target.value" class="input" placeholder="Название" type="text">
			<input :value="body" @input="body = $event.target.value" class="input" placeholder="Описание" type="text">
			<!-- обработчик события кнопки и вызов функции createPost -->
			<button class="btn" @click="createPost">Создать</button>
		</form>


		<!-- v-for -  директива для отрисовки списка элементов на основе массива данных  -->
		<!-- posts — исходный массив, а post — ссылка на текущий элемент массива -->
		<div class="post" v-for="post in posts" :key="post">
			<!-- динамически забираем title у post -->
			<div> <strong> Название: </strong>{{ post.title }}</div>
			<div> <strong> Описание: </strong>{{ post.body }}</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			//массив постов
			posts: [
				{ id: 1, title: 'JavaScript 1', body: 'Описание поста 1' },
				{ id: 2, title: 'JavaScript 2', body: 'Описание поста 2' },
				{ id: 3, title: 'JavaScript 3', body: 'Описание поста 3' },

			],
			//еще 2 модели
			title: '',
			body: ''
		}

	},
	methods: {
		/* функция обработки кнопки */
		createPost() {
			//объект новый пост newPost
			const newPost = {
				//уникальный id с текущей датой
				id: Date.now(),
				//title получаем из модели
				title: this.title,
				//body получаем из модели
				body: this.body,
			}
			//добавляем новый пост newPost в массив posts
			this.posts.push(newPost);
			//поле добавления поста - очищаем форму штзге
			this.title = '',
				this.body = ''
		},
		/* функция по забору значения из input
		по-умолчанию параметром эти обработчики получают event
		inputTitle(event) {
		this.title = event.target.value;
		вместо этой функции пишем сразу в обработчике input:
		 @input="title=$event.target.value"
		} */
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

form {
	display: flex;
	flex-direction: column;
}

.input {
	width: 100%;
	border: 1px solid teal;
	margin: 15px 0px 0px 0px;
	padding: 10px 15px;
	outline: none;
}


.btn {
	margin: 15px 0px 0px 0px;
	align-self: flex-end;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 2px solid teal;
}

.post {
	padding: 15px;
	border: 2px solid teal;
	margin: 15px 0px 0px 0px;
}
</style>
