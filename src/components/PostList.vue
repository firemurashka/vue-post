<template>
	<!-- v-for -  директива для отрисовки списка элементов на основе массива данных  -->
	<!-- posts — исходный массив, а post — ссылка на текущий элемент массива -->
	<div class="post" v-for="post in posts" :key="post">
		<!-- динамически забираем title у post -->
		<div> <strong> Название: </strong>{{ post.title }}</div>
		<div> <strong> Описание: </strong>{{ post.body }}</div>
	</div>
</template>

<script>
export default {
	//аргументы props для остов из массива в App 
	props: {
		//пишем то что ожидаем на входе - посты
		posts: {
			//указываем тип данных - массив
			type: Array,
			//require - чем будут инициализироваться эти посты по default - если true значит обязательно
			require: true
		}
	}
}
</script>

<!-- scoped - стили аботают только внитри этого компонента -->
<style scoped>
.post {
	padding: 15px;
	border: 2px solid teal;
	margin: 15px 0px 0px 0px;
}
</style>
