<template>
	<div>
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
				{ id: 4, title: 'JavaScript 4', body: 'Описание поста 4' },
				{ id: 5, title: 'JavaScript 5', body: 'Описание поста 5' },
				{ id: 6, title: 'JavaScript 6', body: 'Описание поста 6' },
				{ id: 7, title: 'JavaScript 7', body: 'Описание поста 7' },


			]
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

.post {
	padding: 15px;
	border: 2px solid teal;
	margin: 15px 0px 0px 0px;
}
</style>
