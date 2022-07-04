<template>
	<div>
		<h3>Список пользователей</h3>
		<!-- v-for -  директива для отрисовки списка элементов на основе массива данных  -->
		<!-- posts — исходный массив, а post — ссылка на текущий элемент массива -->
		<post-item v-for="post in posts" :key="post" :post="post" />
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
.post {
	padding: 15px;
	border: 2px solid teal;
	margin: 15px 0px 0px 0px;
}
</style>
