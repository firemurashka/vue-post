<!-- PostItem.vue - компонент PostItem пост-->

<template>
	<div class="post">
		<div>
			<div>
				{{ post.id }}
			</div>
			<!-- динамически забираем title у post -->
			<div> <strong> Название: </strong>{{ post.title }}</div>
			<div> <strong> Описание: </strong>{{ post.body }}</div>
		</div>
		<div class="post__btns">
			<my-button @click="$router.push(`/posts/${post.id}`)"> Открыть
			</my-button>
			<!-- отдаем post наверх -->
			<my-button @click="$emit('remove', post)"> Удалить
			</my-button>
		</div>
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
.post {
	padding: 15px;
	border: 2px solid teal;
	margin: 15px 0px 0px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.post__btns {
	display: flex;
}
</style>
