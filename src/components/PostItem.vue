<template>

	<div class="post">
		<!-- динамически забираем title у post -->
		<div> <strong> Название: </strong>{{ post.title }}</div>
		<div> <strong> Описание: </strong>{{ post.body }}</div>
	</div>
</template>

<script>
export default {
	//аргументы props для остов из массива в App 
	props: {
		//пишем то что ожидаем на входе - пост
		post: {
			//указываем тип данных - массив
			type: Array,
			//require - чем будут инициализироваться эти посты по default - если true значит обязательно
			require: true
		}
	}
}
</script>

<style scoped>
</style>
