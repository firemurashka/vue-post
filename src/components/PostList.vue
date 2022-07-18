<template>
	<div class="post__list">
		<!-- условная отрисовка v-if -->
		<div v-if="posts.length > 0">
			<h3>Список пользователей</h3>
			<!-- v-for -  директива для отрисовки списка элементов на основе массива данных  -->
			<!-- posts — исходный массив, а post — ссылка на текущий элемент массива -->
			<!-- отдаем post наверх -->
			<!-- remove - событие, отдаем событие наверх-->
			<post-item v-for="post in posts" :key="post.id" @remove="$emit('remove', post)" :post="post" />
		</div>
		<h2 v-else style="color:blue">Список пользователей пуст</h2>
	</div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
	components: {
		PostItem
	},
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
.post__list {
	margin: 15px 0;
}
</style>
