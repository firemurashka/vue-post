<template>
	<div class="navbar">
		<div @click="$router.push('/')">Vue 3</div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Посты</my-button>
			<my-button @click="$router.push('/about')" style="margin-left:20px">О сайте</my-button>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-navbar"
}
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	box-shadow: 2px 2px 4px grey;
	height: 50px;
	background-color: rgb(246 246 246);
	align-items: center;
	padding: 0 15px;
}

.navbar__btns {
	margin-left: auto;
}
</style>
