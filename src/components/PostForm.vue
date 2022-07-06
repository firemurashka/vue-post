<template>
	<!-- @submit.prevent отмена стандартного поведения браузера - перезагрузки (prevent-модификатор)-->
	<form @submit.prevent>
		<h4>Создание поста</h4>
		<!-- v-bind или просто : - директива для привязки данных -->
		<!--  @input обработчик события input который вызывает функцию inputTitle -->
		<!-- post.title - обращаемся не на прямую к title а забираем его из объекта post -->
		<!--:value="post.title" @input="post.title = $event.target.value"  заменяем на v-model="post.title" -->
		<!--  v-model:value="post.title"  связывание с атрибутом-->
		<my-input v-model="post.title" placeholder="Название" type="text" />
		<my-input v-model="post.body" placeholder="Описание" type="text" />
		<!-- обработчик события кнопки и вызов функции createPost -->
		<my-button class="btn__post" @click="createPost"> Создать </my-button>
	</form>

</template>

<script>
export default {

	data() {
		return {
			//объявляем модель post с полями
			post: {
				title: '',
				body: ''
			}
		}

	},
	methods: {
		/* функция обработки кнопки */
		createPost() {
			/* объект создавать не надо
				объект новый пост newPost
				const newPost = {
				уникальный id с текущей датой
				id: Date.now(),
				title получаем из модели
				title: this.title,
				body получаем из модели
				body: this.body,
						} */


			this.post.id = Date.now();
			//генерируем событие на кот родит компонент сможет подписаться для этого есть $emit
			// create -  первый параметр название события
			// this.post - 2 параметр даем аргументы кот будут попадать в соотсв функцию после подписки родителя - новй пост
			this.$emit('create', this.post);
			//поле добавления поста - очищаем форму штзге
			this.post = {
				title: '',
				body: ''
			}

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

<style scoped>
form {
	display: flex;
	flex-direction: column;
}


.btn__post {
	align-self: flex-end;
	margin: 15px 0px 0px 0px;
}
</style>
